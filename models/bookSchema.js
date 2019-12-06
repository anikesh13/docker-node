var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    }
});

var Model = mongoose.model('bookInfo', BookSchema);
module.exports = Model;
