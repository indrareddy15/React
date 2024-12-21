const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
const bookRoute = require("./routes/routes");
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
connectDB();

app.get("/hello", (req, res) => {
    res.send("Hello World");
})

app.use(express.json());
app.use("/book", bookRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

