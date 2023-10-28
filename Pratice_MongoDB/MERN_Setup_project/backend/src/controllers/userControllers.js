const Users = require('../models/userModels');

const loginUser = async (req, res) => {
    res.status(200).json({ message: "Login successful" })
}


const signUpUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await Users.signUp(email, password)
        res.status(200).json({ email, user })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }


    // res.status(200).json({ message: "Signup successful" })
}


module.exports = {
    loginUser,
    signUpUser
}