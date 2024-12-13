const bcrypt = require('bcrypt');
const Jwt = require("jsonwebtoken")

const UserModel = require('../model/user.model');
console.log('JWT_SECRET: from auth Service', process.env.JWT_SECRET);

class AuthService {
    register = async (user) => {
        try {
            const hashpass = await this.generateHashedPassword(user.password)
            user.password = hashpass
            const newUser = await UserModel.create(user);
            if (!newUser) {
                throw new Error('Failed to create user');
            }
            return newUser;
        } catch (error) {
            throw error;
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

    comaprePassword = (password, hashedPwd) => bcrypt.compare(password, hashedPwd);

    generateJwt = async (payload) => Jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    verfityJwt = async (token) => Jwt.verify(token, process.env.JWT_SECRET);

}

module.exports = AuthService;