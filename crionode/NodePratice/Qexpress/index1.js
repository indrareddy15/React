const express = require("express")

const port = 8086;

const coinBaseJson = require("../coinbase.json");

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Currency Database</h1>")
})

app.get("/currencies", (req, res) => {
    res.json(coinBaseJson)
})

app.get("/currencies/:id", (req, res) => {
    const { id } = req.params

    const currency = coinBaseJson.data.find(item => item.id.toUpperCase() === id.toUpperCase());

    if (!currency) {
        return res.status(404).send({ message: "Invalid Symbol" })
    }

    res.json(currency)
})

app.get("/currencies/", (req, res) => {
    const { min_value } = req.query;

    if (min_value) {
        return res.send
            (
                coinBaseJson.data.filter(min_value => min_value.min_size === minValue)
            )
    }
    res.send(coinBaseJson.data)


})


app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})