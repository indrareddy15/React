const bcrypt = require('bcrypt');
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

}

module.exports = AuthService;