const express = require("express");
const port = 8085;
const { getCurriencies, getCurrencieSymbol } = require("./controllers/curriencies.controller");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Currency Database</h1>");
});

app.get("/currencies", getCurriencies);

app.get("/currencies/:id", getCurrencieSymbol);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
