const express = require("express");

const port = 8081;

const app = express();

const { router: recipieRouter } = require("./routes/recipe.routes.js");

app.use("/recipes", recipieRouter);

app.listen(port, () => {
    console.log(`Server is running in the port ${port}`);
});
