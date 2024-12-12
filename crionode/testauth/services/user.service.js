const UserModel = require('../model/user.model');

class UserService {

    createUser = async (user) => {
        try {
            const { fullname, username, email, password } = user;
            const newUser = new UserModel({ fullname, username, email, password });
            await newUser.save();
            return newUser;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    findAllUsers = async () => {
        try {
            const users = await UserModel.find();
            return users
        } catch (error) {
            throw new Error(error.message);
        }
    }

    getUserByName = async (username) => {
        try {
            const user = await UserModel.findOne({ username });
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    findById = (id) => UserModel.findById(id)
}

module.exports = UserService;