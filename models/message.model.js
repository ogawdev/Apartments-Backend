module.exports = (sequelize, DataTypes) => {
    return sequelize.define("message", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4(),
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};
