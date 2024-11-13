import userJson from "./user.json" assert { type: "json" };
import userSearchSchema from "../validations/userSearchValidations.js"

// const userJson = require("./user.json");
// const { userSearchSchema } = require("../validations/userSearchValidations.js");


export const getAllUsers = (req, res) => {
    res.send(userJson.data);
};

export const getUserById = (req, res) => {
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
export const searchUsers = (req, res) => {
    const { gender, age } = req.query;

    const result = userSearchSchema.validate({ gender, age })

    // if (age && isNaN(age)) {
    //     return res.status(400).send({ message: "Age must be a valid number" });
    // }

    let filteredUsers = userJson.data;

    if (gender && age) {
        return res.send(filteredUsers.filter((user) => user.gender === gender && user.dob.age === parseInt(age)))
    }

    if (gender) {
        const validGenders = ['male', 'female', 'other'];
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

// module.export = { getAllUsers, getUserById, searchUsers };
