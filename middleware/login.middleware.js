module.exports = async (req, res, next) => {
  console.log(req.session.admin);
  if (req.session.admin) {
    next();
  } else {
    res.redirect("/admin/login");
  }
};
