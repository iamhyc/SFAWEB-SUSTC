var db = require('./db');
var moment = require('./moment.min.js');

function User (user){
	this.name = user.name;
	this.id = user.id;
	this.pwd = user.pwd;//
	this.books = user.books;
	this.log_time = null;
}

module.exports = User;

User.prototype.save = function (callback){
	var user = {
		name: this.name,
		pwd: this.pwd,
		id: this.id,
		books:null,log_time:null
	}
	//Link to Database

		db.collection('users', function (err, collection){
			if (err){
	
				return callback(err);
			}
			collection.insert(user, {safe: true}, function (err, user){
				if (err) return callback(err);
				callback(null, user[0]);
			})
		})
}

User.get = function(id, callback) {
	//Link to Database
	
		db.collection('users', function (err, collection){
			if (err) {
				return callback(err);
			}
			//Find user by CODE
			collection.findOne({'code': id}, function(err, user){
				if (err) return callback(err);
				callback(null, user);
			})
		})
	
};

User.getById = function(id, callback) {
	//Link to Database
			db.collection('users', function (err, collection){
			if (err) {
				return callback(err);
			}
			//Find user by CODE
			collection.findOne({'id': id}, function(err, user){
				if (err) return callback(err);
				callback(null, user);
			})
		})
};

User.getAll = function(callback) {
	//Link to Database

		db.collection('users', function (err, collection){
			if (err) {
				return callback(err);
			}
			//Find user by ID
			collection.find({}).toArray(function(err, docs){
				if (err) return callback(err);
				callback(null, docs);
			})
		})
};


User.update = function(code, pwd, id, classno, phone, callback) {
	var newObj = {};
	if (id) newObj.id = id;
	if (pwd) newObj.pwd = pwd;		if (classno) newObj.classno = classno;
	if (phone) newObj.phone = phone;	newObj.log_time = moment().format('YYYY-MM-D	HH:mm');
	//obj = JSON.stringify(); console.log(obj);

		db.collection('users', function (err, collection){
			if (err) {
				return callback(err);
			}
			//Find user by ID
			collection.update({'code': code}, {$set : newObj}, 
			{w:1}, function(err){
				if (err) return callback(err);
			})
		})
};