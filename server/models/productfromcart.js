'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductfromCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductfromCart.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    autor: DataTypes.STRING,
    cover: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductfromCart',
  });
  return ProductfromCart;
};