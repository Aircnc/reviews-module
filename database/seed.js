var data = require('./fakedata.js');
var db = require('./index.js');
var model = require('./model.js');

model.Listings.sync()
	.then(() => {
		return model.Reviews.sync();
	})
	.then(() => {
		return model.Listings.bulkCreate(data.generatorList(100))
	})
	.then(() => {
		return model.Reviews.bulkCreate(data.generatorReview(1000))
	})
	.then(() => {
		console.log('Data has been seeded!')
	})	
	.catch(error =>
		console.log(error))
	.then(()=>{db.close()})
