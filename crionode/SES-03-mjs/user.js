import express from "express";
import { getAllUsers, getUserById, searchUsers } from "./controllers/user.controller.js";

const app = express();

const port = 8086;

app.get("/users", getAllUsers);

app.get("/users/search", searchUsers);

app.get("/users/:uuid", getUserById);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});