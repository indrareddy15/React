const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config(); // To load environment variables

const app = express();
app.use(bodyParser.json());

// MongoDB User schema
const User = require("./User"); // Assuming User schema is in models/User.js

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// OTP generator function
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// User Registration
app.post("/register", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate OTP
        const otp = generateOtp();

        // Create new user
        const newUser = new User({ email, password: hashedPassword, otp });
        await newUser.save();

        // Send OTP to user's email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "OTP Verification",
            text: `Your OTP code is ${otp}`,
        };
        transporter.sendMail(mailOptions);

        res.status(200).json({ message: "OTP sent to email" });
    } catch (err) {
        res.status(500).json({ error: "Error during registration" });
    }
});

// User Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate OTP
        const otp = generateOtp();
        user.otp = otp;
        await user.save();

        // Send OTP to user's email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "OTP Verification",
            text: `Your OTP code is ${otp}`,
        };
        transporter.sendMail(mailOptions);

        res.status(200).json({ message: "OTP sent to email" });
    } catch (err) {
        res.status(500).json({ error: "Error during login" });
    }
});

// OTP Verification
app.post("/verify-otp", async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        if (user.otp === otp) {
            // Generate JWT token for successful verification
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token, message: "OTP verified successfully" });
        } else {
            res.status(400).json({ message: "Invalid OTP" });
        }
    } catch (err) {
        res.status(500).json({ error: "Error during OTP verification" });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
