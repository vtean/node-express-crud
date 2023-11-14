"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.Category, { foreignKey: "categoryId", as: "category" });
        }
    }
    Product.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(50),
            },
            price: {
                type: DataTypes.DECIMAL,
            },
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
