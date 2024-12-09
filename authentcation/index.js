const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db.connection");
const userRoute = require("./routes/user.route")
const authRoute = require("./routes/auth.route")

dotenv.config()

connectDB()
const app = express();
const port = process.env.PORT || 3001

app.use(express.json())

app.use("/auth", authRoute)
app.use("/user", userRoute)


app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})