const { loginPOST, loginGET, dashboardGET } = require("../controller/admin.controller");
const loginMiddleware = require("../middleware/login.middleware");

const router = require("express").Router();

// Login
router.get("/login", loginGET);
router.post("/login", loginPOST)

// Dashboard
router.get("/", loginMiddleware, dashboardGET);


module.exports = {
  path: "/admin",
  router,
};
