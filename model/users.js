var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var produtSchema = new Schema({
    "username":String,
    "password":String,
    "productId":String,
    "productNume":String,
    "salePrice":Number,
    "productImage":String,
});

//暴露模型
module.exports = mongoose.model("Users",produtSchema);