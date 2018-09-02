var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Users = require("../model/users");

//有账号密码，连接数据库
// mongoose.connection("mongodb://root:123456@127.0.0.1:27017/test")

//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/test");
//监听数据库连接是否成功
mongoose.connection.on("connected",function(){
  console.log("数据库连接成功！")
});
mongoose.connection.on("error",function(){
  console.log("数据库连接失败！")
});
mongoose.connection.on("disconnected",function(){
  console.log("数据库连接断开！")
});

router.get("/",function(req,res,next){
  // res.send(".........");
  Users.find({}, function(err,doc){
    if(err){
      res.json({
        status:"1",
        msg:err.message
      });
    }else{
      res.json({
        status:"0",
        msg:"",
        result:{
          count:doc.length,
          list:doc
        }
      });
    }
  })
})

module.exports = router;