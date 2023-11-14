"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            Category.hasMany(models.Product, { foreignKey: "categoryId", as: "products" });
        }
    }
    Category.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(50),
            },
        },
        {
            sequelize,
            modelName: "Category",
        }
    );
    return Category;
};
