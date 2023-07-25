'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Account.init({
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    name: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    token: DataTypes.TEXT,
    refreshToken: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};