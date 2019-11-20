const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userFeild = new Schema({
    email: {
        unique: true,
        allowNull: false,
        type: String,
    },
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    phone: {
        unique: true,
        required: true,
        allowNull: false,
        type: Number,
        minlength: 5,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    }
});

let userSubscribeFeild = new Schema({
    uuid: {
        allowNull: false,
        type: String,
    },
    isVisited: {
        allowNull: false,
        type: Boolean,
    }
});

const userObejct = mongoose.model('userDetail', userFeild);
const userSubscribe = mongoose.model('userSubscribe', userSubscribeFeild);

module.exports = { userObejct, userSubscribe };
