module.exports = (sequelize, DataTypes) => {
  return sequelize.define("categories", {
    category_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4(),
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
