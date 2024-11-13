const express = require('express');
const { router: userRouter } = require('./routes/user.routes.js');

const { router: todoRouter } = require("./routes/todo.routes.js")

const app = express();
const port = 8086;


app.use("/users", userRouter);
app.use("/todos", todoRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
