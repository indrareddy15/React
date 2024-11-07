const express = require("express")
const port = 8085;
const currenciesJson = require("./coinbase.json")
const app = express()


app.get("/", (req, res) => {
    res.send("<h1>Currency Database</h1>")
})

app.get("/currencies", (req, res) => {
    res.send(currenciesJson)
    console.log(res.send(currenciesJson))
})

app.listen(port, () => {
    console.log(`Server is runnning at ${port}`)
})