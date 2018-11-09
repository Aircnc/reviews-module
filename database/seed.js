const data = require('./fakedata.js');
const db = require('./index.js');
const model = require('./database.js');

// must create database before seeding. query (create database reviews_module)

model.Listings.sync({ force: true })
  .then(() => model.Reviews.sync({ force: true }))
  .then(() => model.Listings.bulkCreate(data.generatorList(100)))
  .then(() => model.Reviews.bulkCreate(data.generatorReview(1000)))
  .then(() => {
    console.log('Data has been seeded!');
  })
  .catch(error => console.log(error))
  .then(() => { db.close(); });
