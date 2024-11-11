import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();

const port = 8086;

app.use("/users", userRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});