const express = require("express")

const port = 8086;

const coinBaseJson = require("../coinbase.json");
const { getAllCurriences, getMinCurrencyValue, getCurriencyById } = require("./controllers/coin.controller");

const app = express()

app.get("/", getAllCurriences)

app.get("/currencies", getMinCurrencyValue)

app.get("/currencies/:id", getCurriencyById)




app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})