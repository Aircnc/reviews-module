var faker = require('faker');
// var name = faker.name.firstName();
// var avatar = faker.image.avatar();
// var sentence = faker.lorem.sentences();
// var paragraph = faker.lorem.paragraph();
// var date = faker.date.month();
// var year = faker.date.between();
// console.log(year)
// console.log(randomYear())

var generatorReview = function(num) {

	var years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

	var randomYear = function() {
		var year = years[Math.floor(Math.random()*years.length)];
		return year
	}
	var fakeReviewData = [];

	for (let i = 0; i < num; i++) {
		var review = {};
			review.name = faker.name.firstName();
			review.avatar = faker.image.avatar();
			review.content = faker.lorem.paragraph();
			review.date = faker.date.month() + ' ' + randomYear();
		fakeReviewData.push(review);
	}
	return fakeReviewData;
}


var generatorList = function(num) {

	// var years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

	// var randomYear = function() {
	// 	var year = years[Math.floor(Math.random()*years.length)];
	// 	return year
	// }
	var fakeListData = [];

	for (let i = 0; i < num; i++) {
		var review = {};
			review.name = faker.name.firstName();
			review.avatar = faker.image.avatar();
			review.star_accuracy = faker.finance.amount(0, 5, 1)
			review.star_location = faker.finance.amount(0, 5, 1)
			review.star_communitcation = faker.finance.amount(0, 5, 1)
			review.star_checkin = faker.finance.amount(0, 5, 1)
			review.star_clean = faker.finance.amount(0, 5, 1)
			review.star_value = faker.finance.amount(0, 5, 1)
		fakeListData.push(review);
	}
	return fakeListData;
}


// console.log(faker.finance.amount(0, 5, 1))

// console.log(generatorReview(1), generatorList(1))

module.exports.generatorReview = generatorReview;

module.exports.generatorList = generatorList;


