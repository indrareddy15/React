const AuthService = require('../services/auth.service');
const UserService = require('../services/user.service');


const authService = new AuthService();
const UserServiceInstance = new UserService()

const createUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await authService.register(user);
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({ message: 'Username and Password are required' });
    }

    try {
        const newUser = await UserServiceInstance.getUserByName(username);
        if (!newUser) {
            return res.status(404).json({ message: `User with username ${username} could not be found!` });
        }

        const pwdMatch = await authService.comaprePassword(password, newUser.password);

        if (pwdMatch) {
            const token = await authService.generateJwt({ userId: newUser._id })
            res.cookie("token", token, { httpOnly: true, maxAge: 2 * 60 * 1000 });
            console.log("token from auth.controller", token)
            res.status(200).json({ message: "Login successful", newUser });
        } else {
            res.status(401).json({ message: "Login failed", reason: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

module.exports = { createUser, loginUser }