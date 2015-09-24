var express = require('express');
var router = express.Router();
var Poster = require('../modules/poster');

var User = require('../modules/user.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  Poster.findTri (function (err, data){
    if (err) data = null;
    res.render('index', { 
      title: 'SFA@SUSTC',
      user: req.session.user,
      images: data,
   });
  })
});

/*router.get('/ineedyou', function(req, res, next) {
  req.session.user={
  name:'legend', 
  id:'11410XXX', 
  code:'11410XXX',
  books:[{title:'title', time:'2015-03-02', admin:'legend',alert:true},{title:'title2', time:'2015-03-02', admin:'legend',alert:false}],
  flag:true};
  console.log(req.session.user);
  res.redirect('/')
});*/

module.exports = router;
