const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/merntestauth';

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI || DB_URI)
        console.log("MongoDB is Connected Successfully.......!")
    } catch (error) {
        console.log("MongoDB Connection Error:", error.message)
        process.exit(1)
    }
}


module.exports = connectDB;
