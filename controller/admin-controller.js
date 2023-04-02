module.exports.dashboardGET = (req, res) => {
  res.render("admin");
};

module.exports.loginGET = (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err + "");
  }
};

module.exports.loginPOST = async (req, res) => {
  try {
    const { username, password } = req.body;

    
  } catch (err) {
    console.log(err + "");
  }
};
