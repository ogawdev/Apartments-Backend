const Express = require("express"),
  Path = require("path"),
  Fs = require("fs"),
  db = require("./modules/db"),
  session = require("express-session"),
  cookieParser = require("cookie-parser"),
  morgan = require("morgan"),
  compression = require('compression')

const app = Express();

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

// Middlewares
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use("/assets", Express.static("public"));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(compression());

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.render("404", {
      error: err.message,
  })
});

/* Settings */
app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "views"));

// Database
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
    res.status(404).json({
        ok: false,
        message: "Page not found"
    })
  });
});

module.exports = app;
