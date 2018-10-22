var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userinfo = new Schema({
    "username": String,
    "password": String,
    "id": String,
    "nicknume": String,
    "salePrice": Number,
    "img": String,
    "loginStatus":Boolean,
    "userType":Number
});

//暴露模型
module.exports = mongoose.model("Login", userinfo);