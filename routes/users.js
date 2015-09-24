var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var dirPath = require('path').resolve(__dirname, '..', 'public/download');
var User = require('../modules/user.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
	if (req.session.user){
	res.render('forum', {
	title: 'SFA@SUSTC',
	user:req.session.user,
	});
	}
	else{
		//req.flash('error' ,"Login First!");
		res.redirect('/users/login');
	}
});

router.get('/logout', function(req, res, next) {
	req.session.user = null;
	res.redirect('/');
});

router.get('/login', function(req, res, next) {
	if (req.session.user){
		//req.flash("error" ,"You have logged in!");
		res.redirect('/');
	}
	else{ next();
	}
});

router.get('/login', function(req, res, next) {
	var err_id = req.query.type;
	console.log(err_id)
	res.render('login', {
	title: 'Login',
	user:null,
	error:err_id
	});
});

router.post('/login', function(req, res, next) {
	var md5 = crypto.createHash('md5'),
		pwd = md5.update(req.body.user_pwd).digest('hex');
	User.get(req.body.user_name, function (err, user){
		if (!user) {
			//req.flash('error', '用户不存在');
			return res.redirect('/users/login?type=ERR_NSU');//Error:NoSuchUser
		}
		if (user.pwd != pwd) {
			//req.flash('error', '密码错误！');
			return res.redirect('/users/login?type=ERR_PWD');
		}
		req.session.user = user;
		req.session.dirPath = dirPath;
		User.update(user.code, null, null, null, function (err){
			if (err) console.log('Unknow Update error!');
			return;
		})
		res.redirect('/users');
	})
})

router.get('/update', function(req, res, next) {
	if (req.session.user){
	res.render('update', {
	title: 'SFA@SUSTC',
	user:req.session.user,
	});
	}
	else{
		//req.flash('error' ,"Login First!");
		res.redirect('/users/login');
	}
})
router.post('/update', function(req, res, next) {
	var md5 = crypto.createHash('md5'),
		old_pwd = md5.update(req.body.old_pwd).digest('hex')

	if (old_pwd != req.session.user.pwd){
		//req.flash('error', "原密码错误");
		return res.redirect('/users/update');
	}

	var new_pwd = req.body.new_pwd,
		re_pwd = req.body.re_pwd;

	if ((new_pwd == null)||(re_pwd != new_pwd)){
		//req.flash('error', "两次密码输入不一致");
		return res.redirect('/users/update');
	} else{

		new_pwd = crypto.createHash('md5').update(new_pwd).digest('hex')
		User.update(req.session.user.code, new_pwd, null, null, null, function (err){
			if (err) console.log('Unknow Update error!');
			return;
		})
		res.redirect('/users')
	}
})

router.get('/reg', function(req, res, next) {
  res.render('reg', { 
  title: 'SFA@SUSTC',
  user: req.session.user
   });
});

router.post('/reg', function(req, res, next) {
  User.get(req.body.code, function (err, user){
    if ((!user)||(user.name != req.body.name)) {
      return res.send('error');
    }
    req.session.user = user;
    req.session.dirPath = dirPath;
    return res.send('/users')
  })
});

router.get('/reg_page', function(req, res, next) {
	if (!req.session.user) res.redirect('/users/reg')
	if (req.session.user.id != "") res.redirect('/users');
  User.getAll(function(err, docs){
  	if (err) return res.redirect('/users/reg_page');
  	var flagArr = new Array([1001]);

  	docs.forEach(function (data){
  		if (data.id != "")	flagArr[parseInt(data.id)] = true;
  	})

  	res.render('reg_page', { 
  		title: 'SFA@SUSTC',
  		user: req.session.user,
  		flags: flagArr,
   });
  })
  
});

router.post('/reg_page', function(req, res, next) {
	var id = req.body.id;
	var regex = /^00\d{3}$/;
	if (!regex.test(id)||(id == "00001")||(id == "00042")) 
		return res.send("formatError");
	User.getById(id, function (err, user){
		if (user) return res.send('occupied');
		else {
			//req.session.user.id = id;
			console.error(req.session.user.name);
			console.error(id);
			var pwd = crypto.createHash('md5').update(req.session.user.code).digest('hex');
			User.update(req.session.user.code, pwd, id, null, null, function (err){
			if (err) return	res.send('error');
			})
			return res.send('success');
		}
	})
});

module.exports = router;
