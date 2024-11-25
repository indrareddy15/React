const mongoose = require('mongoose');
const validator = require('validator');
// const { blackListedDomains } = require('../configs/userConfig');

const authorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        default: "",
        maxLength: 50,
    },
    email: {
        type: String,
        required: true,
        maxLength: 50,
        validate: {
            validator: (v) => {
                return validator.isEmail(v) && !blackListedDomains.some(domain => v.endsWith(domain));
            },
            message: (props) => {
                if (blackListedDomains.some(domain => props.value.toLowerCase().endsWith(domain))) {
                    return `Personal email is not allowed! Please enter your professional email.`;
                }
                return `${props.value} is not a valid email!`;
            }
        },
    },
    twitter: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: "https://www.flaticon.com/free-icon/user_1144760",
        validate: {
            validator: (v) => {
                return validator.isURL(v, { protocols: ['https'], require_protocol: true });
            },
            message: (props) => `${props.value} is not a valid https URL!`
        }
    }
}, {
    _id: false
})



const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: [authorSchema],
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
}, {
    timestamps: true,
    versionKey: false,
})

const blogModel = mongoose.model('Blog', blogSchema, "test"); // collection name is optional

module.exports = blogModel;