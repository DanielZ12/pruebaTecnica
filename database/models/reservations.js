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
      this.belongsTo(models.Billings, {
        as: "billings",
        foreignKey: "billing_id",
      })
      this.hasMany(models.Status, {
        as: "status",
        foreignKey: "status_id"
      })
    }
  }
  Reservations.init({
    room: DataTypes.INTEGER,
    count_days: DataTypes.DATE,
    billing_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservations',
  });
  return Reservations;
};