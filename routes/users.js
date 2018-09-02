var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";
/* GET users listing. */
router.get('/', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection("hf").findOne({}, function (err, result) {
      if (err) throw err;
      res.render('users', {
        username: result.username,
        password: result.password
      });
      db.close();
    });
  });
});

module.exports = router;