'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employer.init({
    employee_id: DataTypes.STRING,
    name: DataTypes.STRING,
    job_title: DataTypes.STRING,
    salary: DataTypes.FLOAT,
    department: DataTypes.STRING,
    joined_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Employer',
  });
  return Employer;
};