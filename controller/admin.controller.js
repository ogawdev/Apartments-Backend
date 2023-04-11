const { ADMIN_USERNAME, ADMIN_PASSWORD } = require("../config/config");
const loginValidation = require("../validation/login.validation");

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
    res.render("admin", {
      title: "Dashboard | Admin",
    });
  }
};
