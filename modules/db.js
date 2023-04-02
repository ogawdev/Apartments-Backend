const { Sequelize } = require("sequelize");
const {
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
} = require("../config/config");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  DB_HOST,
  DB_PORT,
  dialect: "postgres",
  logging: false,
});

module.exports = async function () {
  try {
    const db = {};

    // Models
    db.Apartment = require("../models/ApartmentModel")(sequelize, Sequelize);
    db.Category = require("../models/CategoryModel")(sequelize, Sequelize);

    // Relations
    db.Category.hasMany(db.Apartment, {
      foreignKey: "ctegory_id",
      as: "apartments",
    });

    db.Apartment.belongsTo(db.Category, {
      foreignKey: "category_id",
      as: "categories",
    });

    await sequelize.sync({ alter: true });
    return db;
  } catch (e) {
    console.log("DB ERROR", e);
  }
};
