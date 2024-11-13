const userJson = require("../user.json")

const getAllUsers = (req, res) => {
    res.json(userJson)
}

const getUserByUUID = (req, res) => {
    const { uuid } = req.params

    const user = userJson.data.find((id) => id.login.uuid === uuid)

    if (!user) {
        return res.status(404).send({ message: "UUID not found" })
    }

    res.send(user)
}

module.exports = { getAllUsers, getUserByUUID }