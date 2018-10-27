var faker = require('faker');


// Generate reviews data

var generatorReview = function(num) {

	var years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

	var randomYear = function() {
		var year = years[Math.floor(Math.random()*years.length)];
		return year
	}
	var fakeReviewData = [];

	for (let i = 0; i < num; i++) {
		var review = {};
			review.user = faker.name.firstName();
			review.avatar = faker.image.avatar();
			review.date = faker.date.month() + ' ' + randomYear();
			review.content = faker.lorem.paragraph();
			review.ListingId = faker.random.number({min:1, max:100});  // maybe this listing id issue
		fakeReviewData.push(review);
	}
	return fakeReviewData;
}


// Generate listings data

var generatorList = function(num) {

	var fakeListData = [];

	for (let i = 0; i < num; i++) {
		var review = {};
			review.owner = faker.name.firstName();
			review.avatar = faker.image.avatar();
			review.accuracy = faker.finance.amount(0, 5, 1)
			review.location = faker.finance.amount(0, 5, 1)
			review.communication = faker.finance.amount(0, 5, 1)
			review.checkin = faker.finance.amount(0, 5, 1)
			review.clean = faker.finance.amount(0, 5, 1)
			review.value = faker.finance.amount(0, 5, 1)
		fakeListData.push(review);
	}
	return fakeListData;
}


// console.log(faker.finance.amount(0, 5, 1))

// console.log(generatorReview(1), generatorList(1))

// console.log(generatorReview(1))


module.exports.generatorReview = generatorReview;

module.exports.generatorList = generatorList;


