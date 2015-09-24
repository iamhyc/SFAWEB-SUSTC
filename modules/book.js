var mongodb = require('./db');

function Book (book){
	this.title = book.title;
	this.name = book.borrower;
	this.time = book.time;
	this.admin = book.admin;
	this.alert = book.alert;
}

module.exports = Book;