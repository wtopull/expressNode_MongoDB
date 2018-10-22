var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bguserinfo = new Schema({
    "username": String,
    "password": String,
    "id": String,
    "nicknume": String,
    "img": String,
    "loginStatus": Boolean,
    "userType": Number
});

//暴露模型
module.exports = mongoose.model("Bglogin", bguserinfo);