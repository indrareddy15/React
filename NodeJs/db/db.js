const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/express-mongo';
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || MONGO_URI)
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;