const express = require('express');
const dotenv = require('dotenv');

dotenv.config();


const connectDB = require('./db/db');
const productRouter = require("./routes/products.route")

const app = express();
app.use(express.json());

connectDB()

const port = 3001;

app.use("/products", productRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})