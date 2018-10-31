DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews_module;

USE reviews_module;

CREATE TABLE listings (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	owner VARCHAR(20) NOT NULL,
	avatar TEXT,
	stars JSON NOT NULL 
);


CREATE TABLE reviews (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	user VARCHAR(20) NOT NULL,
	avatar TEXT,
	stay DATE NOT NULL,
	content TEXT NOT NULL,
	response TEXT, 
	FOREIGN KEY (listing_id) REFERENCES listing(id) 
);