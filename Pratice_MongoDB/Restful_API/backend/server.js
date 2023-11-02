const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoutes = require("./src/routes/taskRoutes")


dotenv.config()

const app = express();

const PORT = process.env.PORT || 1508;


app.use('/api/tasks', taskRoutes)

app.use(express.json());
const uri = process.env.MONGODB_URI;


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', () => {
    console.log("Connected to MongoDB");
})

app.listen(PORT, () => { console.log(`Server is Running at ${PORT}`) })