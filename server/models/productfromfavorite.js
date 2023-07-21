'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductfromFavorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductfromFavorite.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    autor: DataTypes.TEXT,
    cover: DataTypes.TEXT,
    price: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'ProductfromFavorite',
  });
  return ProductfromFavorite;
};