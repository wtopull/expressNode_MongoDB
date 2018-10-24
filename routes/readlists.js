var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Readlists = require("../model/readlists");
//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/test");
// mongoose.connect("mongodb://111.231.207.167:27017/test");
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

router.get("/", async function (req, res, next) {
    try {
        Readlists.find({}, "-_id", (err, doc) => {
            if (err) {
                res.json({
                    status: "0",
                    msg: err.message
                });
            } else {
                var listarr = new Object();
                doc.forEach(item => {
                    if (!listarr[ item.type ]) {
                        listarr[ item.type ] = [];
                    }
                    listarr[item.type].push(item)
                });
                res.json({
                    status: "1",
                    msg: "获取信息成功了！",
                    count: listarr.length,
                    data: listarr
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
router.post("/", (req, res, next) => {
    try {
        let param = {
            title: req.body.title
        }
        Readlists.deleteMany({
            title: param.title
        }).then(doc => {
            res.json({
                status: "1",
                msg: "删除成功！",
                data: doc
            });
        })
    } catch (error) {
        res.json({
            status: "0",
            msg: error.message
        });
    }
})
module.exports = router;