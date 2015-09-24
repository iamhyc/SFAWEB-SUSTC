var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')
var mime = require('mime')
var dirPath = path.resolve(__dirname, '..', 'public/download')

router.get('/', function(req, res, next) {
  if (!req.session.user) res.redirect('/');
  else next();
});

router.get('/', function(req, res, next) {
  var step = req.query.step;	
  	if (step=="*")	step = '..';
  	if (!step)	{step = "";}
  	
  	console.log(step);
  if (path.extname(step)){
  	//console.log(path.join(req.session.dirPath, step))
  	res.download(path.join(req.session.dirPath, step));	
  }

  else{
  	var pwd = path.resolve(req.session.dirPath, step)
  	if (pwd.length < dirPath.length) res.redirect('/download')
  	fs.readdir(pwd, function (err, files){
  		if (err) return res.redirect('/users/logout');
  		req.session.dirPath = pwd;
  		res.render('download', { 
  			title: 'SFA@SUSTC',
  			user: req.session.user,
  			'files': files,
    	});
  	})
  }
});

router.get('/:id', function(req, res, next){
	
	//res.setHeader('Content-disposition', 'attachment; filename=' + id);
	//fs.createReadStream(req.session.dirPath).pipe(res);
})

module.exports = router;