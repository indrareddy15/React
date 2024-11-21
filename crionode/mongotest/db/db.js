const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/mproducts")
        console.log("MongoDB is connected");
    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1);
    }

}

module.exports = connectDB;