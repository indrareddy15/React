const coinBaseJson = require("../coinbase.json")

const getAllCurriences = (req, res) => {
    res.send("<h1>Currency Database</h1>")
}

const getMinCurrencyValue = (req, res) => {
    const { min_value } = req.query;

    if (min_value) {
        return res.send
            (
                coinBaseJson.data.filter(minValue => minValue.min_size === min_value)
            )
    }
    res.send(coinBaseJson.data)
}

const getCurriencyById = (req, res) => {
    const { id } = req.params

    const currency = coinBaseJson.data.find(item => item.id.toUpperCase() === id.toUpperCase());

    if (!currency) {
        return res.status(404).send({ message: "Invalid Symbol" })
    }

    res.json(currency)
}

module.exports = { getAllCurriences, getMinCurrencyValue, getCurriencyById }