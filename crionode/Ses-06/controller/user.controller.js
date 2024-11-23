const userJson = require("../Json/user.json");
const getAllUsers = (req, res) => {
    res.json(userJson);
};

const getUserSearch = (req, res) => {
    const { gender, age } = req.query;
    const usersJson = userJson.data;
    let filteredUsers = usersJson;

    if (gender) {
        const validGenders = ['male', 'female', 'other'];
        if (!validGenders.includes(gender.toLowerCase())) {
            return res.status(400).send({ message: `Invalid gender value. Valid values are ${validGenders.join(", ")}` });
        }
        filteredUsers = filteredUsers.filter(user => user.gender === gender);
    }

    if (age) {
        const parsedAge = parseInt(age);
        if (isNaN(parsedAge)) {
            return res.status(400).send({ message: "Invalid age value. Age must be a number" });
        }
        filteredUsers = filteredUsers.filter(user => user.dob.age === parsedAge);
    }

    if (filteredUsers.length === 0) {
        return res.status(404).send({ message: "No users found" });
    }

    res.send(filteredUsers);
};

const getUserById = (req, res) => {
    const { uuid } = req.params;

    if (!uuid) {
        return res.status(400).send({ message: "UUID is required" });
    }

    const usersJson = userJson.data;
    const user = usersJson.find(user => user.login.uuid === uuid);

    if (!user) {
        return res.status(404).send({ message: `User with ID ${uuid} not found` });
    }

    res.send(user);
};

module.exports = { getAllUsers, getUserSearch, getUserById };