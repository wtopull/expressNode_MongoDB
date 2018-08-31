var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    dbo.collection("site").findOne({}, function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
});

module.exports = router;
