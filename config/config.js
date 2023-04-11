const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const { env } = process;

module.exports = {
  PORT: env.PORT,
  DB_NAME: env.DB_NAME,
  DB_USER: env.DB_USER,
  DB_PASS: env.DB_PASS,
  DB_HOST: env.DB_HOST,
  DB_PORT: env.DB_PORT,
  ADMIN_USERNAME: env.ADMIN_USERNAME,
  ADMIN_PASSWORD: env.ADMIN_PASSWORD,
};
