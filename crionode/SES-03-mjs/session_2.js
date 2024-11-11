import express from "express";
const port = 8085;
import { getCurrencies, getCurrencySymbol } from "./controllers/curriencies.controller.js";
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Currency Database</h1>");
});

app.get("/currencies", getCurrencies);

app.get("/currencies/:id", getCurrencySymbol);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});