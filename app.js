const Express = require("express"),
  Path = require("path"),
  Fs = require("fs"),
  db = require("./modules/db"),
  session = require("express-session"),
  cookieParser = require("cookie-parser");

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use("/assets", Express.static("public"));
app.use(cookieParser());

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(404).json({ error: err.message });
});

// Session
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

/* Settings */
app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "views"));

app.use(async (req, res, next) => {
  req.db = await db();
  next();
});

/* Routes */
const routePath = Path.join(__dirname, "routes");
Fs.readdir(routePath, (err, files) => {
  if (err) throw new Error(err);
  files.map((file) => {
    const RoutePath = Path.join(__dirname, "routes", file);
    const Route = require(RoutePath);
    if (Route.path && Route.router) app.use(Route.path, Route.router);
  });

  app.use("*", (req, res) => {
    res.render("404");
  });
});

module.exports = app;
