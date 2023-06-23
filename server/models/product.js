'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.TEXT,
    autor: DataTypes.TEXT,
    email: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: DataTypes.NUMERIC,
    cover: DataTypes.TEXT,
    status: DataTypes.TEXT,
    paperback_price: DataTypes.NUMERIC,
    hardcover_price: DataTypes.NUMERIC,
    hardcover_availability: DataTypes.INTEGER,
    paperback_availability: DataTypes.INTEGER,
    genre: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};

