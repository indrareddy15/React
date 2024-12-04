const bcrypt = require('bcrypt');
const Jwt = require("jsonwebtoken")
const User = require("../models/user.model");

class AuthService {
    signup = async (payload) => {
        try {
            const hashedPassword = await this.generateHashedPwd(payload.password);
            const user = await User.create({
                ...payload,
                password: hashedPassword
            });
            return user;
        } catch (error) {
            throw new Error('Error creating user: ' + error.message);
        }
    }

    generateHashedPwd = (password) => {
        return bcrypt.hash(password, 10);
    }

    comparePwd = (plainTextPwd, hashedPassword) => bcrypt.compare(plainTextPwd, hashedPassword)

    generateJwt = (payload) => Jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "20s" })
}

module.exports = AuthService;
