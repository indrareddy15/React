import express from "express";
import { userRouter } from "./routes/user.routesJoi.js";

// const express = require("express");
// const userRouter = require("./routes/user.routesJoi.js");

const app = express();

const port = 8087;

app.use("/users", userRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});