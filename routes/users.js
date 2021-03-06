var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Users = require("../model/users");
var url = "mongodb://127.0.0.1:27017/test";
// var url = "mongodb://root:123456@111.231.207.167:27017/test";

/*导入node的加密库*/
// var crypto = require('crypto');

//有账号密码，连接数据库
// mongoose.connect(url, {useNewUrlParser: true})
//连接数据库
mongoose.connect(url,{useNewUrlParser: true});
//监听数据库连接是否成功
mongoose.connection.on("connected", function () {
  console.log("数据库连接成功！")
});
mongoose.connection.on("error", function () {
  console.log("数据库连接失败！")
});
mongoose.connection.on("disconnected", function () {
  console.log("数据库连接断开！")
});

router.get("/", function (req, res, next) {
  try {
    let username = req.query.username;
    if (!username) {
      throw new Error('参数错误');
    }
    Users.find({username: req.query.username}, '-_id', (err, doc) => {
      if (err) {
        res.json({
          status: "0",
          msg: err.message
        });
      } else {
        res.json({
          status: "1",
          msg: "获取个人信息成功！",
          count: doc.length,
          data: doc,
        });
      }
    });
  } catch (error) {
    res.json({
      status: "0",
      msg: error.message
    });
  }
});

// router.post('/login', (req, res, next) => {
//   // var md5 = crypto.createHash('md5');
//   // 打印post请求的数据内容
//   console.log(req.body.username);
//   res.status(200).send("success");
//   console.log(req.body.username);
//   console.log(req.body.password);
//   if (req.body.username == "huiyuan101" && req.body.password == "11211121") {
//     res.send(JSON.stringify(dataSuccess));
//   } else {
//     res.send(JSON.stringify(dataError));
//   }
//   var myData = new User(req.body);
//   myData.save().then(item => {
//     res.send("item saved to database");
//   }).catch(err => {
//     res.status(400).send("unable to save to database");
//   });
// });

// router.all('/login', function (req, res, next) {
//   console.log(req.method); // 打印请求方式
//   if (req.method == "POST") {
//     var param = req.body;
//   } else {
//     var param = req.query || req.params;
//   }
//   console.log(param);
//   console.log(param.username);
//   console.log(param.password);
//   if (param.username == "huiyuan101" && param.password == "11211121") {
//     res.end(JSON.stringify(dataSuccess));
//   } else {
//     res.end(JSON.stringify(dataError));
//   }
// });
module.exports = router;