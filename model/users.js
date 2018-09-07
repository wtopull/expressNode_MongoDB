var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var produtSchema = new Schema({
    "username":String,
    "password":String,
    "id":String,
    "nicknume":String,
    "salePrice":Number,
    "img":String,
});

//暴露模型
module.exports = mongoose.model("Users",produtSchema);