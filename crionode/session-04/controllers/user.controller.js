
const userJson = require("../controllers/user.json");

const getAllUsers = (req, res) => {
    res.send(userJson.data);
};

const getUserById = (req, res) => {
    const { uuid } = req.params;

    if (!uuid) {
        return res.status(400).send({ message: "UUID is required" });
    }

    const user = userJson.data.find(user => user.login.uuid === uuid);

    if (!user) {
        return res.status(404).send({ message: `User with ID ${uuid} not found` });
    }

    res.json(user);
};

const searchUsers = (req, res) => {
    const { gender, age } = req.query;

    if (age && isNaN(age)) {
        return res.status(400).send({ message: "Age must be a valid number" });
    }

    let filteredUsers = userJson.data;

    if (gender) {
        const validGenders = ['male', 'female', 'other']; // Adjust to match your data
        if (!validGenders.includes(gender.toLowerCase())) {
            return res.status(400).send({ message: `Invalid gender value. Valid values are ${validGenders.join(", ")}` });
        }
        filteredUsers = filteredUsers.filter(user => user.gender.toLowerCase() === gender.toLowerCase());
    }

    if (age) {
        filteredUsers = filteredUsers.filter(user => user.dob.age === parseInt(age));
    }

    if (filteredUsers.length === 0) {
        return res.status(404).send({ message: "No users found matching the criteria" });
    }

    res.json(filteredUsers);
};

module.exports = { getAllUsers, getUserById, searchUsers };
