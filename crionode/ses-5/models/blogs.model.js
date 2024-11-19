const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: [String],
        default: [],
    },
    content: {
        type: String,
        default: ""
    },
    publishDate: {
        type: Date,
        default: null
    },
})

const blogModel = mongoose.model('Blog', blogSchema, "test"); // collection name is optional

module.exports = blogModel;