var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";


MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  // var dbo = db.db("runoob");
  // var myobj = {
  //   name: "菜鸟教程",
  //   url: "www.runoob",
  // };
  // dbo.collection("site").insertOne(myobj, function (err, res) {
  //   if (err) throw err;
  //   console.log("文档插入成功");
  //   db.close();
  // });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    dbo.collection("site").findOne({}, function (err, result) {
      if (err) throw err;
      console.log(result);
       res.render('index', {
         title: result.doctor
       });
      db.close();
    });
  });
 
});

module.exports = router;
