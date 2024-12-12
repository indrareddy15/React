const UserService = require('../services/user.service');

const UserServiceInstance = new UserService()

const createUser = async (req, res) => {
    try {
        const user = await UserServiceInstance.createUser(req.body);
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await UserServiceInstance.findAllUsers();
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

const findUserByName = async (req, res) => {
    try {
        const user = await UserServiceInstance.getUserByName(req.params.username);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

module.exports = { createUser, getAllUsers, findUserByName };