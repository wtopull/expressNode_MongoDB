var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Logins = require("../model/logins");
//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/test");
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

router.post("/", (req, res, next) => {
    try {
        let param = {
            username: req.body.username,
            password: req.body.password
        }
        Bglogins.findOne({
            username: req.body.username
        }, '-_id').then(doc => {
            if (doc.password == param.password) {
                res.json({
                    status: "1",
                    msg: "登陆成功！",
                    count: doc.length,
                    data: doc,
                });
            } else {
                res.json({
                    status: "0",
                    msg: "密码不正确！"
                });
            }
        }).catch(error => {
            res.json({
                status: "0",
                msg: "账号不存在！"
            });
        })
    } catch (error) {
        res.json({
            status: "0",
            msg: error.message
        });
    }
});
module.exports = router;