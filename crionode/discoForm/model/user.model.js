const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        maxLength: 50,
        default: ""
    },
    userName: {
        type: String,
        unique: true,
        required: true,
        maxLength: 25,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    }
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;