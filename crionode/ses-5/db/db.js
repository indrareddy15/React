const mongoose = require('mongoose');

// const dbURI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/test");
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
}

module.exports = { connectDB };