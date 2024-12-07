const AuthService = require("../services/auth.service");
const UserService = require("../services/user.service");

const authService = new AuthService();
const userService = new UserService();

const postSignup = async (req, res) => {
    try {
        const newUser = await authService.signup(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send({
            message: "Failed to sign user up!",
            error: error.message || error
        });
    }
};

const postLogin = async (req, res) => {
    const { username, password } = req.body;
    console.log(password)

    if (!username || !password) {
        return res.status(400).send({ message: "Username and password are required." });
    }

    try {
        const reqUser = await userService.findByUsername(username);

        if (!reqUser) {
            return res.status(404).send({ message: `User with username ${username} could not be found!` });
        }

        const matchedPwd = await authService.comparePwd(password, reqUser.password);

        if (matchedPwd) {
            const token = authService.generateJwt({ userId: reqUser._id })
            console.log(token)
            res.cookie('remember-user-token', token, {
                httpOnly: true,
                maxAge: 2 * 60 * 1000
            });
            return res.status(200).send({ matchedPwd });
            // return res.status(200).send({ message: "Login successful" });
        } else {
            return res.status(401).send({ matchedPwd });
            // return res.status(401).send({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Failed to login. Please try again.",
            error: error.message || error
        });
    }
};

module.exports = { postSignup, postLogin };
