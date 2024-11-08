const currenciesJson = require("../coinbase.json")

const getCurriencies = (req, res) => {
    const { min_value } = req.query;
    if (min_value)
        return res.send(
            currenciesJson.data.filter(({ min_size }) => min_size === min_value)
        );
    res.send(currenciesJson.data);
}

const getCurrencieSymbol = (req, res) => {
    const { id } = req.params;
    const currency = currenciesJson.find(currency => currency.id === id);

    if (!currency) {
        return res.status(404).send({ message: `Currency with ID ${id} not found` });
    }

    res.json(currency);
}

module.exports = { getCurriencies, getCurrencieSymbol }