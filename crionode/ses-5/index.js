const express = require('express');

const userRouter = require('./routes/user.routes');
const blogRouter = require('./routes/blogs.routes.js');
const { verifyAuth } = require('./middlewares/verifyAuth');
const { connectDB } = require('./db/db.js');

const dotenv = require('dotenv');

const app = express();
app.use(express.json());

connectDB();

const port = 3000;

dotenv.config();

app.use(verifyAuth)
// app.use("/users", userRouter)

app.use("/blogs", blogRouter)




app.listen(port, () => { console.log(`Server is running on port ${port}`) })