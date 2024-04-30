// src/utils/auth.js

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  // Check if a token exists in localStorage
  const token = localStorage.getItem("token");
  // If token exists and is not expired, return true
  return token && !isTokenExpired(token);
};

// Function to log in the user
export const login = (token) => {
  // Store the token in localStorage
  localStorage.setItem("token", token);
};

// Function to log out the user
export const logout = () => {
  // Remove the token from localStorage
  localStorage.removeItem("token");
};

// Function to get the token from localStorage
export const getToken = () => {
  return localStorage.getItem("token");
};

// Function to check if the token is expired
const isTokenExpired = (token) => {
  try {
    // Decode the token to get its payload
    const decodedToken = decode(token);
    // Check if the token expiration time is in the past
    return decodedToken.exp < Date.now() / 1000;
  } catch (error) {
    // If there's an error decoding the token, consider it expired
    return true;
  }
};

// Helper function to decode a JWT token
const decode = (token) => {
  // Decode the token payload (without verifying its signature)
  return JSON.parse(atob(token.split(".")[1]));
};
