const express = require("express");
const dotenv = require("dotenv");
const { connectToDB } = require("./db/db");
const userRouter = require("./routes/user.routes.js");
// const { verifyAuth } = require("./middleware/userauth.js");

dotenv.config();

const port = process.env.PORT || 3000

const app = express();

connectToDB();


app.use(express.json());

// app.use(verifyAuth)
app.use("/user", userRouter)


app.listen(port, () => {
    console.log(`Server is Running at ${port}`)
})