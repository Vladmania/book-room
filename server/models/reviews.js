'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
    idProduct: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    avatar: DataTypes.TEXT,
    feedback: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};