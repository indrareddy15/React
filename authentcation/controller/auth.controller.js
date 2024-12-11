const UserService = require("../services/user.service");
const AuthService = require("../services/auth.service");

const userServiceInstance = new UserService();
const authServiceInstance = new AuthService();


const postSignup = async (req, res) => {
    try {
        const newUser = await authServiceInstance.signUp(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Failed to create new user", error: error.message });
    }
}

const postLogin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Login failed", reason: "Username and password are required" });
    }

    try {
        const user = await userServiceInstance.getUserByName(username);
        if (!user) {
            return res.status(404).json({ message: `User with username ${username} could not be found!` });
        }

        const matchedPwd = await authServiceInstance.comparePassword(password, user.password);

        if (matchedPwd) {
            const token = authServiceInstance.generateJwt({ userId: user._id });
            console.log("token", token);
            res.cookie("token", token, { httpOnly: true, maxAge: 2 * 60 * 1000 });
            res.status(200).json({ message: "Login successful", user });
        } else {
            res.status(401).json({ message: "Login failed", reason: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to login", error: error.message });
    }
}

module.exports = { postSignup, postLogin };