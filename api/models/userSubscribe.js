const mongoose = require('mongoose');

var userSubscribe = new mongoose.Schema({
    uuid: {
        allowNull: false,
        type: String,
    },
    isVisited: {
        allowNull: false,
        type: Boolean,
    }
});

module.exports = mongoose.model('userSubscribe', userSubscribe);
