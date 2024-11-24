const axios = require('axios');

const BASE_URL = "https://open.er-api.com/v6/latest"

const getAllCurrencies = async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/USD`)
        console.log("response", response);
        const currencies = Object.keys(response.data.rates)
        console.log("currencies: =>", currencies);
        res.status(200).json({ data: currencies })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'The service is currently down, please check again later' });
    }
}

const getCurriencyConversion = async (req, res) => {
    const { value, currency, to_currency } = req.query;

    if (!value || isNaN(value) || value < 0) {
        return res.status(400).send({ message: `Incomplete or Incorrect data passed` })
    }

    if (!currency || currency.length !== 3 || !to_currency || to_currency.length !== 3) {
        return res.status(400).send({ message: `Incomplete or Incorrect data passed` })
    }

    try {
        const response = await axios.get(`${BASE_URL}/${currency}`)

        if (!response.data.rates[to_currency]) {
            return res.status(404).json({ message: 'Cannot find given currency code' })
        }

        const exchangeRate = response.data.rates[to_currency]
        const result = parseFloat(value) * exchangeRate
        res.status(200).json({ resultData: result })
    } catch (error) {
        res.status(500).json({ message: 'The service is currently down, please check again later' });
    }
}


module.exports = { getAllCurrencies, getCurriencyConversion }