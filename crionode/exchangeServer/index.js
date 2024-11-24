const express = require("express")
const dotenv = require("dotenv");
const curriencyRouter = require("./routes/routes")
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/exchange", curriencyRouter)



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});