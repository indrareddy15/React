const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;
