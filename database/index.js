
const Sequelize = require('sequelize');

const sequelize = new Sequelize('reviews_module', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

module.exports = sequelize;