const Sequelize = require('sequelize');

const sequelize = new Sequelize('reviews_module', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
});

// console.log('--------', sequelize);

module.exports.sequelize = sequelize;
