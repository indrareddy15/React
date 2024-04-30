// backend/server.js
const express = require("express");


const app = express();
const PORT = 5000;

// Simple in-memory storage for demonstration purposes
const users = [];

// Middleware to parse JSON requests
app.use(express.json());

// Route for user registration
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  // Check if username is already registered
  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ message: "username already registered" });
  }

  // Create new user object and add to users array
  const newUser = { username, password };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully" });
});

// Route for user login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = users.find((user) => user.username === username);

  // Check if user exists and password matches
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  res.status(200).json({ message: "Login successful", user });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
