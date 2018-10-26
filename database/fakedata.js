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
			review.star.accuracy = faker.finance.amount(0, 5, 1)
			review.star.location = faker.finance.amount(0, 5, 1)
			review.star.communitcation = faker.finance.amount(0, 5, 1)
			review.star.checkin = faker.finance.amount(0, 5, 1)
			review.star.clean = faker.finance.amount(0, 5, 1)
			review.star.value = faker.finance.amount(0, 5, 1)
		fakeListData.push(review);
	}
	return fakeListData;
}

// console.log(faker.finance.amount(0, 5, 1))


console.log(generatorList(1))

// module.exports.generator = generator;


