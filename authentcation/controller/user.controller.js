const UserService = require("../services/user.service");
const userServiceInstance = new UserService();

const postUser = async (req, res) => {
    try {
        const user = await userServiceInstance.register(req.body);
        console.log(user)
        res.status(201).json(user);
    } catch (error) {
        if (error.code === 11000) { // Duplicate key error
            res.status(409).json({
                message: "Failed to create new user",
                reason: "Username or Email already exists in DB",
            });
        } else {
            console.error(error); // Log the error for debugging purposes
            res.status(500).json({ message: "Failed to create new user", error: error.message });
        }
    }
};

const getUserByName = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await userServiceInstance.getUserByName(username);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Username not found", username });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ message: "Error in fetching user", error: error.message });
    }
};

const getAllUser = async (req, res) => {
    try {
        const users = await userServiceInstance.findAll();
        if (users && users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: "No users found" });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ message: "Error in fetching user details", error: error.message });
    }
};

module.exports = { postUser, getUserByName, getAllUser };
