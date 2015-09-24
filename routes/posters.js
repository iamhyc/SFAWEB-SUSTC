var express = require('express');
var moment = require('../modules/moment.min.js');
var formidable = require('formidable');
var Poster = require('../modules/poster');
var fs = require('fs')
var path = require('path')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Poster.findAll(function (err, posts){
    if (err) posts = [];
    res.render('posters', { 
    title: 'SFA@SUSTC',
    user: req.session.user,
    posts: posts,
    });
  })
});

router.get('/details/:id', function(req, res, next) {
  Poster.findOne(req.params.id, function (err, doc){
    if ((err)||(!doc)) {
    return res.redirect('/posters');
    }
    res.render('details', { 
    title: 'SFA@SUSTC',
    user: req.session.user,
    doc: doc,
    });
  })
});

router.get('/submit', function(req, res, next) {
  if (req.session.user && req.session.user.flag) next()
  else req.redirect('/posters');
});

router.get('/submit', function(req, res, next) {
  res.render('poster_submit', { 
  title: 'Back_Poster_Post',
  user: req.session.user,
  });
});

router.post('/submit', function(req, res, next) {
  var tmp = {
    title : req.body.title,
    editor : req.session.user.name,
    info : req.body.info,
    content : req.body.content,
    img_path : req.body.img_src,
  }
  
  var post = new Poster(tmp);
  post.save(function (err){
    if (err){
      //return req.flash('error', err);
    }
    //req.flash('success', '发布成功!');
    res.redirect('/posters');
  })
})

router.post('/uploadImg', function(req, res, next) {
    var form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.maxFieldsSize = 15 * 1024 * 1024;
    form.uploadDir = __dirname + '/../public/images';
    form.parse(req, function (err, fields, files) {
        if (err) {
            throw err;
        }
        var image = files.imgFile;
        console.log(fields)

        var extName = "";
        switch (files.imgFile.type) {
          case 'image/pjpeg': extName = '.jpg';  break;
          case 'image/jpeg': extName = '.jpg'; break;     
          case 'image/png': extName = '.png';  break;
          case 'image/x-png': extName = '.png';  break;     
        }

        if(extName.length == 0){
          res.locals.error = '只支持png和jpg格式图片';
          res.render('index', { title: TITLE });
        return;          
        }

        var newName = path.basename(fields.localUrl, extName) + '_' + moment().format('YYYYMMDD') + extName;
        
        fs.renameSync(image.path, path.join(form.uploadDir, newName));
        //img_path = img_path.replace('/\\/g', '/');
        var url = '/images/' + newName;
        var info = {
            "error": 0,
            "url": url
        };
        res.send(info);
    });
});


router.get('/edit', function(req, res, next) {
  if (req.session.user && req.session.user.flag) next()
  else req.redirect('/posters');
});

router.get('/edit/:id', function(req, res, next) {
  Poster.findOne(req.params.id, function (err, doc){
    if ((err)||(!doc)) {
    return res.redirect('/posters');
    }
    res.render('poster_edit', { 
    title: 'SFA@SUSTC',
    user: req.session.user,
    doc: doc,
    });
  })
});

router.post('/edit/:id', function(req, res, next) {
  
});


router.get('/delete/:id', function(req, res, next) {
    var id = req.params.id;
    Poster.remove(id, function (err, doc){
      if ((err)||(!doc)) {
        console.error(err)
        return res.redirect('/posters/details/' + id);
      }
    })
    res.redirect('/posters')
})

module.exports = router;