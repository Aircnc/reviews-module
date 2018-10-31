const Sequelize = require('sequelize');

const sequelize = new Sequelize('reviews_module', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false,
});

// sequelize.query("CREATE DATABASE `reviews_module`")
//   .then(() => { console.log('Database created!'); });

// console.log('--------', sequelize);

module.exports = sequelize;
