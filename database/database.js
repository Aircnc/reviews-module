// var data = require('fakedata.js')
const Sequelize = require('sequelize');

const sequelize = new Sequelize('reviews_module', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});


var Listings = sequelize.define('Listings', {
	id: {type: Sequelize.INTEGER, 
		autoIncrement: true, 
		primaryKey: true
		},
	owner: Sequelize.STRING,
	avatar: Sequelize.STRING,
	accuracy: Sequelize.INTEGER,
	location: Sequelize.INTEGER,
	communication: Sequelize.INTEGER,
	checkin: Sequelize.INTEGER,
	clean: Sequelize.INTEGER,
	value: Sequelize.INTEGER
});


var Reviews = sequelize.define('Reviews', {
	id: {type: Sequelize.INTEGER, 
		autoIncrement: true, 
		primaryKey: true
		},
	user: Sequelize.STRING,
	avatar: Sequelize.STRING,
	date: Sequelize.STRING,
	content: Sequelize.STRING,
	response: Sequelize.STRING
});


Listings.sync();

Reviews.sync();

