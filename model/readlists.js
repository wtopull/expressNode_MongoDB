var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var readlists = new Schema({
    "id": String,
    "type": String,
    "title": String,
    "date": String,
    "img": String,
    "subtitle": String,
    "contents": String
});

//暴露模型
module.exports = mongoose.model("Readlists", readlists);