const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("admin");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = {
  path: "/admin",
  router,
};
