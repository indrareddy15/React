const userSchema = require("../model/userSchema");
const mongoose = require("mongoose");

// GET all users
const getUsers = async (req, res) => {
    const users = await userSchema.find({}).sort({ createAt: -1 });
    res.status(200).json(users);
};

// GET OneUser
const getOneUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({ error: 'User not found' });
    }

    const users = await userSchema.findById(id);
    res.status(200).json(users);
};

// POST the User or Add a new User
const postUsers = async (req, res) => {
    const { id, name, userName, email, phone } = req.params;

    try {
        const user = await userSchema.create({ id, name, userName, email, phone });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ email: error.message });
    }
};

// PATCH the users
const updateUsers = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({ error: 'User not found' });
    }

    const users = await userSchema.findByIdAndUpdate(
        { _id: id },
        { ...req.params }
    );

    if (!users) {
        return res.status(404).json({ errors: "User not found" });
    }
    res.status(200).json(users);
};

// DELETE the user
const deleteUsers = async (req, res) => {

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({ error: 'User not found' });
    }

    const users = await userSchema.findByIdAndDelete({ _id: id });

    if (!users) {
        return res.status(400).json({ error: "User not found" });
    }
    res.status(200).json(users);
};

module.exports = {
    getUsers,
    getOneUser,
    postUsers,
    updateUsers,
    deleteUsers
};
