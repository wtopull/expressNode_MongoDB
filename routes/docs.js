var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Docs = require("../model/docs");
/*导入node的加密库*/
// var crypto = require('crypto');

//有账号密码，连接数据库
// mongoose.connection("mongodb://root:123456@127.0.0.1:27017/docs")

//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/myblog");
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
    Docs.find({}, '-_id', (err, doc) => {
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
module.exports = router;