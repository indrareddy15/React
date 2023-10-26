const Users = require('../models/userModels');

const loginUser = async (req, res) => {
    res.status(200).json({ message: "Login successful" })
}


const signUpUser = async (req, res) => {
    res.status(200).json({ message: "Signup successful" })
}


module.exports = {
    loginUser,
    signUpUser
}