const express = require("express");
const { getAllUsers, getUserByUUID } = require("./controllers/user.controller");

const port = 8082;

const app = express();

app.get("/users", getAllUsers)

app.get("/users/:uuid", getUserByUUID)






app.listen(port, () => {
    console.log(`Server is running in Port ${port}`)
})