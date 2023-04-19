const { ADMIN_USERNAME, ADMIN_PASSWORD } = require("../config/config");
const loginValidation = require("../validation/login.validation");
const categoryValidation = require("../validation/category.validation.js")

module.exports = class Admin {
  static async loginGET(req, res) {
    res.render("login", {
      title: "Login | Admin",
    });
  }

  static async loginPOST(req, res) {
    try {
      const { email, password } = await loginValidation.validateAsync(req.body);

      if (email !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
        return res.status(400).json({ message: "Email or password invalid" });
      }

      req.session.admin = true;

      res.redirect("/admin");
    } catch (e) {
      console.log(e);
      res.json({
        ok: false,
        message: e + "",
      });
    }
  }

  static async dashboardGET(req, res) {
    try {
      const { Message } = req.db;

        let messageCount = await Message.count({
            raw: true,
        });

      res.render("admin", {
        title: "Dashboard | Admin",
        messageCount,
      });
    } catch (e) {
        console.log(e);
        res.json({
            ok: false,
            message: e + "",
        });
    }
  }

  static async CategoryGET(req, res) {
    try {
      let { c_page, p_page } = req.query;
      const { Category } = req.db

      if (!(p_page || c_page)) {
        p_page = 5;
        c_page = 1;
      }

      if (Number(p_page) === NaN || Number(c_page) === NaN) {
        throw new Error("invalid c_page and p_page options");
      }

      let totalCount = await Category.count();

      let categories = await Category.findAll({
        offset: p_page * (c_page - 1),
        limit: p_page ,
        raw: true
      });

      res.render("category", {
        title: "Category | Admin",
        ok: true,
        categories,
        totalCount,
      })
    } catch (e) {
        console.log(e + "")
        res.render('404', {
          error: e + ""
        })
    }
  }

  static async CategoryPOST(req, res) {
    try {
      const { Category } = req.db
      const { title, description } = await categoryValidation.validateAsync(req.body);

      await Category.create({
        title,
        description,
        image: `/assets/uploads/${req.file.filename}`,
      });

      let totalCount = await Category.count();

      let categories = await Category.findAll({
        offset: 5 * (Math.ceil(totalCount / 5) - 1),
        limit: 5,
        raw: true
      });

      res.render("category", {
        ok: true,
        message: "Category create succesfully",
        categories,
        totalCount,
      })
    } catch (e) {
      console.log(e + "")
      res.render('404', {
        error: e + ""
      })
    }
  }

  static async CategoryDELETE(req, res) {
    try {
      const { Category, Apartment } = req.db
      const { category_id } = req.params

      await Apartment.destroy({
        where: {
          category_id,
        }
      })

      await Category.destroy({
        where: {
          category_id,
        }
      })

      let totalCount = await Category.count();

      let categories = await Category.findAll({
        limit: 5 ,
        raw: true
      });

      res.render("category", {
        title: "Category | Admin",
        ok: true,
        categories,
        totalCount,
        message: "Category deleted succesfully",
      })
    } catch (e) {
      console.log(e + "")
      res.render('404', {
        error: e + ""
      })
    }
  }

  static async ApartmentGET(req, res) {
    try {
      const { Apartment, Category } = req.db;
      let { c_page, p_page } = req.query;
      let { category_id } = req.params;

      if (!(p_page || c_page)) {
        p_page = 5;
        c_page = 1;
      }

      if (Number(p_page) === NaN || Number(c_page) === NaN) {
        throw new Error("invalid c_page and p_page options");
      }

      let totalCount = await Apartment.count();

      let apartments = await Apartment.findAll({
        offset: p_page * (c_page - 1),
        limit: p_page ,
        raw: true,
        where: {
            category_id,
        },
      });

      let category = await Category.findOne({ where: { category_id }, raw: true })

      req.session.category = category;

      res.render("apartment", {
        title: "Apartment | Admin",
        ok: true,
        apartments,
        totalCount,
        category,
      })
    } catch (e) {
        console.log(e + "")
        res.render('404', {
          error: e + ""
        })
    }
  }

  static async ApartmentPOST(req, res) {
    try {
      const { Apartment } = req.db
      let { title, address, phone, price,  description, longitude, latitude, category_id } = req.body;

      let images = req.files.images.map(a => `/assets/uploads/${a.filename}`);

      await Apartment.create({
        title, address, phone, price,  description, longitude, latitude, category_id, images,
      });

      let totalCount = await Apartment.count();

      let apartments = await Apartment.findAll({
        offset: 5 * (Math.ceil(totalCount / 5) - 1),
        limit: 5,
        raw: true
      });

      res.render("apartment", {
        ok: true,
        message: "Apartment create succesfully",
        apartments,
        totalCount,
        category: req.session.category,
      })
    } catch (e) {
      console.log(e + "")
      res.render('404', {
        error: e + ""
      })
    }
  }

  static async ApartmentDELETE(req, res) {
    try {
      const { Apartment, Category } = req.db;
      let { id } = req.params;

      await Apartment.destroy({ where: { id }, returning: true });

      let totalCount = await Apartment.count();

      let offset = 5 * (Math.ceil(totalCount / 5) - 1) < 0 ? 0 : 5 * (Math.ceil(totalCount / 5) - 1);

      let apartments = await Apartment.findAll({
        offset,
        limit: 5,
        raw: true
      });

      res.render("apartment", {
        ok: true,
        message: "Apartment delete succesfully",
        apartments,
        totalCount,
        category: req.session.category,
      });
    } catch (e) {
      console.log(e + "")
      res.render('404', {
        error: e + ""
      })
    }
  }

  static async MessageGET(req, res) {
    try {
      const { Message } = req.db;

      let messages = await Message.findAll();

      res.render("message", {
        ok: true,
        messages,
      });
    } catch (e) {
      console.log(e);
      res.status.json({
        ok: false,
        message: e + "",
      })
    }
  }

  static async MessageDELETE(req, res) {
    try {
      const { Message } = req.db;
      let { id } = req.params;

      await Message.destroy({ where: { id }, returning: true });

      let messages = await Message.findAll();

      res.render("message", {
        ok: true,
        messages,
        message: "Message deleted succesfully",
      });
    } catch (e) {
      console.log(e + "")
      res.render('404', {
        error: e + ""
      })
    }
  }
};
