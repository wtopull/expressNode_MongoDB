var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var produtSchema = new Schema({
    "id": Number,
    "title": String,
    "path": String,
    "name": String,
    "date": String,
    "img":String,
    "content": String,
    "contents":String
});

//暴露模型
module.exports = mongoose.model("Docs", produtSchema);