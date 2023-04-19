const router = require("express").Router();
const multer = require("multer");
const md5 = require("md5");
const path = require("path");
const {
  loginPOST,
  loginGET,
  dashboardGET,
  CategoryGET,
  CategoryPOST,
  CategoryDELETE,
  ApartmentGET,
  ApartmentPOST,
  ApartmentDELETE,
  MessageGET,
  MessageDELETE,
} = require("../controller/admin.controller");
const loginMiddleware = require("../middleware/login.middleware");

// Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, md5(file.originalname) + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
const uploadMultiple = upload.fields([{ name: "images" }]);

// Login
router.get("/login", loginGET);
router.post("/login", loginPOST);

// Dashboard
router.get("/", loginMiddleware, dashboardGET);

// Category
router.get("/category/delete/:category_id", loginMiddleware, CategoryDELETE);
router.route("/category").get(loginMiddleware, CategoryGET).post(loginMiddleware, upload.single("image"), CategoryPOST);

// Apartment
router.route("/apartment/:category_id").get(loginMiddleware, ApartmentGET);
router.post("/apartment", loginMiddleware, uploadMultiple, ApartmentPOST);
router.get("/apartment/delete/:id", loginMiddleware, ApartmentDELETE);

// Message
router.get("/message", loginMiddleware, MessageGET);
router.get("/message/delete/:id", loginMiddleware, MessageDELETE);

module.exports = {
  path: "/admin",
  router,
};
