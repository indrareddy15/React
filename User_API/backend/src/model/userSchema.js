const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("users", userSchema);
