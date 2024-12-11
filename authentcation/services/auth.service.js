const bcrypt = require('bcrypt');
const Jwt = require("jsonwebtoken")

const Users = require("../model/user.model");


class AuthService {
    signUp = async (payload) => {
        try {
            const hashedPassword = await this.generateHashedPassword(payload.password);
            payload.password = hashedPassword;
            const newUser = await Users.create(payload);
            return newUser;
        } catch (error) {
            throw new Error(`Error registering user: ${error.message}`);
        }
    }

    generateHashedPassword = async (password) => {
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            return hashedPassword;
        } catch (error) {
            throw new Error(`Error hashing password: ${error.message}`);
        }
    }

    comparePassword = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

    generateJwt = (payload) => Jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });

    verifyJwt = (token) => Jwt.verify(token, process.env.JWT_SECRET_KEY);
}

module.exports = AuthService;