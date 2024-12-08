const Users = require("../model/user.model");


class UserService {
    register = async (user) => {
        try {
            const { fullname, username, email, password } = user;
            const newUser = new Users({ fullname, username, email, password })
            const result = await newUser.save();
            return result
        } catch (error) {
            throw error
        }
    }

    findAll = async () => { // check service
        try {
            const newUser = await Users.find({});
            return newUser
        } catch (error) {
            throw error
        }
    }

    findByUserName = async (username) => {
        try {
            const userResult = await Users.findOne({ username })
            return userResult
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserService