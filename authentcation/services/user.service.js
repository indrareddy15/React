const Users = require("../model/user.model");

class UserService {
    register = async (user) => {
        try {
            const { fullname, username, email, password } = user;
            const newUser = new Users({ fullname, username, email, password });
            const result = await newUser.save();
            return result;
        } catch (error) {
            console.log(error);
            throw new Error(`Error registering user: ${error.message}`);
        }
    }

    findAll = async () => {
        try {
            const users = await Users.find({});
            return users;
        } catch (error) {
            throw new Error(`Error fetching users: ${error.message}`);
        }
    }

    getUserByName = async (username) => {
        try {
            const userResult = await Users.findOne({ username });
            return userResult;
        } catch (error) {
            throw new Error(`Error fetching user by username: ${error.message}`);
        }
    }
}

module.exports = UserService;