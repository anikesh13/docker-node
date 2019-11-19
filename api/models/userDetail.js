const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
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

module.exports = mongoose.model('userDetail', userSchema);
