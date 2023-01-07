'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reservations.init({
    room: DataTypes.INTEGER,
    count_days: DataTypes.DATE,
    date_billings: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservations',
  });
  return Reservations;
};