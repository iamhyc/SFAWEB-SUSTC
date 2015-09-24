var db = require('./db');
var ObjectID = require('mongodb').ObjectID;
var moment = require('./moment.min.js');

function Poster (poster){
  this. post_time = poster.post_time;
  this.editor = poster.editor;
  this.title = poster.title;
  this.content = poster.content;
  this.info = poster.info;
  this.img_path = poster.img_path;
}

module.exports = Poster;

Poster.prototype.save = function(callback) {
  var poster = {
    title: this.title,
    editor: this.editor,
    content: this.content,
    info: this.info,
    comments: [],
    img_path: this.img_path,
    post_time: moment().format("YYYY/MM/DD HH:mm")
  }

    db.collection('posters', function (err, collection){
      if (err){
        return callback(err);
      }
      collection.insert(poster, {safe: true}, function (err, poster){
        if (err) return callback(err);
        callback(null);
      })
    })
};

Poster.findOne = function (id, callback){

    db.collection('posters', function (err, collection){
      if (err) {
        return callback(err);
      }
      //Find user by ID
      collection.findOne({'_id': ObjectID(id)}, function(err, doc){
        if (err) return callback(err);
        callback(null, doc);
      })
    })
}

Poster.findTri = function (callback){
    db.collection('posters', function (err, collection){
      if (err){
        return callback(err);
      }
      collection.find({}, {limit:3}).sort({time: -1}).toArray(function (err, docs){
        if (err) return callback(err);
        callback(null, docs);
      })
    })
}

Poster.findAll = function (callback){
    db.collection('posters', function (err, collection){
      if (err){
        return callback(err);
      }
      collection.find().sort({post_time: -1}).toArray(function (err, docs){
        if (err) return callback(err);
        callback(null, docs);
      })
    })
}

Poster.update = function (id, title, editor, content, info, callback){
  var newObj = {}
  newObj.editor = editor;
  newObj.post_time = moment().format("YYYY/MM/D HH:mm")
  if (title) newObj.title = title;    if (info) newObj.info = info;
  if (content) newObj.content = content;    
  //if (new_ps) {$push:{comments: new_ps}}

    db.collection('posters', function (err, collection){
      if (err){
        return callback(err);
      }
      collection.update({'_id': ObjectID(id)}, {$set: newObj}, {w:1}, function (err){
        if (err) return callback(err);
      })
    })
}

Poster.updateComment = function (id, comment, callback){
    db.collection('posters', function (err, collection){
      if (err) {
        return callback(err);
      }
      collection.update({'_id':ObjectID(id)}, {$push:{'comments': comment}}, {w:1}, function (err){
        if (err) return callback(err);
      })
    }) 
}

Poster.remove = function (id, callback){
    db.collection('posters', function (err, collection){
      if (err) {
        return callback(err);
      }
      collection.remove({'_id':ObjectID(id)}, {safe:true}, function (err, result){
        if (err) return callback(err);
      })
    }) 
}