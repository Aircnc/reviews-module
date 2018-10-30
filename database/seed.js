const data = require('./fakedata.js');
const db = require('./index.js');
const model = require('./database.js');

model.Listings.sync()
  .then(() => model.Reviews.sync())
  .then(() => model.Listings.bulkCreate(data.generatorList(100)))
  .then(() => model.Reviews.bulkCreate(data.generatorReview(1000)))
  .then(() => {
    console.log('Data has been seeded!');
  })
  .catch(error => console.log(error))
  .then(() => { db.close(); });
