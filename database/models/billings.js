'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Billings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Billings.init({
    full_name: DataTypes.STRING,
    identification: DataTypes.INTEGER,
    method_paid: DataTypes.STRING,
    total_paid: DataTypes.INTEGER


  }, {
    sequelize,
    modelName: 'Billings',
  });
  return Billings;
};