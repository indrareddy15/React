const userModel = require("../model/user.model");

const registerUser = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ $or: [req.body] })

        if (existingUser) {
            return res.status(409).send({
                message: "Failed to create new user",
                reason: "Already Exists in DB"
            })
        }

        // if (!userName) {
        //     return res.status(400).send({ message: `username is required` })
        // }

        // if (!email) {
        //     return res.status(400).send({ message: `email is required` })
        // }

        const newUser = await userModel.create(req.body)
        console.log("newUser", newUser)
        await newUser.save();
        res.status(200).send(newUser)
    } catch (error) {
        res.status(500).send({ message: `Internal Server Error` })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find(req.params)
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send({ message: `Internal Server Error` })
    }
}

const getUserByName = async (req, res) => {
    try {
        const user = await userModel.findOne({ userName: userName })
        if (!user) {
            return res.status(404).json({ message: `Use not found!, ${userName}` })
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }

}

module.exports = { registerUser, getAllUsers, getUserByName }