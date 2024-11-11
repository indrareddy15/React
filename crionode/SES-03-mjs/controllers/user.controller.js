import userJson from "../controllers/user.json" assert { type: "json" };

const getAllUsers = (req, res) => {
    res.send(userJson.data);
};

const getUserById = (req, res) => {
    const { uuid } = req.params;
    const user = userJson.data.find(user => user.login.uuid === uuid);

    if (!user) {
        return res.status(404).send({ message: `User with ID ${uuid} not found` });
    }

    res.json(user);
};

const searchUsers = (req, res) => {
    const { gender, age } = req.query;
    if (gender && age) {
        let users = userJson.data.filter(user => user.gender === gender && user.dob.age === parseInt(age));
        return res.json(users);
    } else if (gender) {
        let users = userJson.data.filter(user => user.gender === gender)
        return res.json(users);
    } else if (age) {
        let users = userJson.data.filter(user => user.dob.age === parseInt(age));
        return res.json(users)
    } else {
        return res.status(400).send({ message: `one of ${gender} or ${age} is required` });
    }
}

export { getAllUsers, getUserById, searchUsers };