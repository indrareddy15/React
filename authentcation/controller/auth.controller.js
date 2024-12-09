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
    try {
        const { username, password } = req.body;
        const user = await userServiceInstance.getUserByName(username);

        if (!user) { // Check only the user if you check the password while comaing the password with hashed password you may get error
            return res.status(401).json({ message: "Login failed", reason: "User not found" });
        }

        const matchedPwd = await authServiceInstance.comparePassword(password, user.password);
        console.log("matchedPwd", matchedPwd);
        console.log("password", password);
        console.log("user.password", user.password);
        if (matchedPwd) {
            res.status(200).json({ message: "Login successful", user });
        } else {
            res.status(401).json({ message: "Login failed", reason: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to login", error: error.message });
    }
}

module.exports = { postSignup, postLogin };