const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const blogRouter = require('./routes/blogs.routes.js');
const { verifyAuth } = require('./middlewares/verifyAuth');
const { connectDB } = require('./db/db.js');


const app = express();
app.use(express.json());

connectDB();

const port = 3000;


app.use(verifyAuth)

app.use("/blogs", blogRouter)




app.listen(port, () => { console.log(`Server is running on port ${port}`) })