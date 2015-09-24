var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { 
  title: 'SFA@SUSTC',
  user: req.session.user
   });
});

router.get('/minigame', function(req, res, next) {
  res.render('game_main', { 
    title: 'SFA@SUSTC',
    user: req.session.user,
  });
});

module.exports = router;
