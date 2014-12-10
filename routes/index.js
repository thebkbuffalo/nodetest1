var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  res.render('index', {title: 'Express'});
});

/* get helloworld page */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World' });
});

router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.render('userlist', {
      title: 'User List',
      "userlist" : docs
    });
  });
});

router.get('/newuser', function(req,res){
  res.render('newuser', {title : 'Add New User'});
});

module.exports = router;
