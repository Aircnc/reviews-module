const Sequelize = require('sequelize');

const sequelize = new Sequelize('reviews_module', 'root', null, {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
  operatorsAliases: false,
  logging: false,
});

// sequelize.query("CREATE DATABASE `reviews_module`")
//   .then(() => { console.log('Database created!'); });

// console.log('--------', sequelize);
module.exports = sequelize;
