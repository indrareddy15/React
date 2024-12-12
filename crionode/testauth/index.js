const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
const userRoute = require("./route/routes")
const authRoute = require("./route/auth.route")

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use("/auth", authRoute)
app.use("/user", userRoute)



// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
