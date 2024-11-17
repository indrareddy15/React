const express = require('express');

const userRouter = require('./routes/user.routes');
const { verifyAuth } = require('./middlewares/verifyAuth');

const dotenv = require('dotenv');
const port = 3000;

const app = express();

dotenv.config();

app.use(verifyAuth)
app.use("/users", userRouter)




app.listen(port, () => { console.log(`Server is running on port ${port}`) })