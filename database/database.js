const Sequelize = require('sequelize');
const db = require('./index.js');

// console.log(db);

const Listings = db.define('Listings', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  owner: Sequelize.STRING,
  avatar: Sequelize.STRING,
  accuracy: Sequelize.INTEGER,
  location: Sequelize.INTEGER,
  communication: Sequelize.INTEGER,
  checkin: Sequelize.INTEGER,
  clean: Sequelize.INTEGER,
  value: Sequelize.INTEGER,
});


const Reviews = db.define('Reviews', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user: Sequelize.STRING,
  avatar: Sequelize.STRING,
  date: Sequelize.STRING,
  content: Sequelize.TEXT,
  response: Sequelize.STRING,
});

// puts a ListingId column on each Reviews instance
// also gives us the `.setUser` method available
Reviews.belongsTo(Listings);

Listings.hasMany(Reviews, {
  foreignKey: {
    name: 'ListingId',
  },
});

// Listings.sync()
// .then((err) => {
// console.log('--------------------', err);
// Reviews.sync();
// });

const findReviews = (id, callback) => {
  Reviews.findAll({
    where: {
      ListingId: id,
    },
  })
    .then((results) => { callback(null, results); })
    .catch((error) => { callback(error, null); });
};


const findListing = (id, callback) => {
  Listings.findById(id)
    .then((results) => { callback(null, results); })
    .catch((error) => { callback(error, null); });
};


// .then(() => { db.close(); });

// console.log(data.generatorList(1), data.generatorReview(1))


module.exports.Listings = Listings;

module.exports.Reviews = Reviews;

module.exports.findReviews = findReviews;

module.exports.findListing = findListing;
