module.exports = class Home {
    static async CategoryIdGET(req, res) {
        try {
            const { Category } = req.db
            const { category_id } = req.params

            let category = await Category.findOne({
                where: {
                    category_id
                },
                raw: true
            });

            if (!category) {
                throw new Error("Category not found");
            }

            res.json({
                ok: true,
                category,
            })
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

            res.json({
                ok: true,
                categories,
                totalCount,
                p_page,
                c_page,
            })
        } catch (e) {
            console.log(e);
            res.json({
                ok: false,
                message: e + "",
            });
        }
    }

    static async ApartmentIdGET(req, res) {
        try {
            const { Apartment } = req.db
            const { apartment_id } = req.params

            let apartment = await Apartment.findOne({
                where: {
                    id: apartment_id
                },
                raw: true
            });

            if (!apartment) {
                throw new Error("Apartment not found");
            }

            res.json({
                ok: true,
                apartment,
            })
        } catch (e) {
            console.log(e);
            res.json({
                ok: false,
                message: e + "",
            });
        }
    }

    static async ApartmentGET(req, res) {
        try {
            const { Apartment, Category } = req.db
            const { category_id } = req.params
            let { c_page, p_page } = req.query;

            if (!(p_page || c_page)) {
                p_page = 5;
                c_page = 1;
            }

            if (Number(p_page) === NaN || Number(c_page) === NaN) {
                throw new Error("invalid c_page and p_page options");
            }

            let totalCount = await Apartment.count();

            let apartments = await Apartment.findAll({
                where: { category_id },
                offset: p_page * (c_page - 1),
                limit: p_page ,
                raw: true
            });


            res.json({
                ok: true,
                apartments,
                totalCount,
                p_page,
                c_page,
            })
        } catch (e) {
            console.log(e);
            res.json({
                ok: false,
                message: e + "",
            });
        }
    }

    static async ApartmentSearch(req, res) {
        try {
            const { Apartment } = req.db;
            let { searchTerm } = req.body;
            let searchNoSpeacialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

            let apartments = await Apartment.findAll({
                $or: [
                    { title: { $regex: searchNoSpeacialChar, $options: "i" } },
                    { description: { $regex: searchNoSpeacialChar, $options: "i" } },
                    { address: { $regex: searchNoSpeacialChar, $options: "i" } },
                ],
            });

            res.json({
                ok: true,
                apartments,
            });
        } catch (e) {
            console.log(e)
            res.json({
                ok: false,
                message: e + "",
            });
        }
    }

    static async MessagePOST(req, res) {
        try {
            const { Message } = req.db;
            const { name, phone, message } = req.body;

            let newMessage = await Message.create({
                name,
                phone,
                message,
            });

            res.json({
                ok: true,
                message: "Message sent successfully",
            });
        } catch (e) {
            console.log(e)
            res.json({
                ok: false,
                message: e + "",
            });
        }
    }
}