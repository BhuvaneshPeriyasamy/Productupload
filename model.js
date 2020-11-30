var mongoose = require('mongoose')

var schema = mongoose.Schema;

var model = new schema({
    name:String,
    price :Number,
    img : Buffer
});

module.exports = mongoose.model("model",model,"productModel")