const mongoose = require('mongoose');

const productShecma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    model: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        default: 0,
    },
})

const productModel = mongoose.model('Product', productShecma);

module.exports = productModel;