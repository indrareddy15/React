import currenciesJson from "./coinbase.json" assert { type: "json" };

// While importing the json files, we need to use the assert { type: "json" } to let the compiler know that the file is a JSON file. 
// This will help the compiler to understand the file type and provide the necessary intellisense and type checking.

const getCurrencies = (req, res) => {
    const { min_value } = req.query;
    if (min_value)
        return res.send(
            currenciesJson.data.filter(({ min_size }) => min_size === min_value)
        );
    res.send(currenciesJson.data);
}

const getCurrencySymbol = (req, res) => {
    const { id } = req.params;
    const currency = currenciesJson.find(currency => currency.id === id);

    if (!currency) {
        return res.status(404).send({ message: `Currency with ID ${id} not found` });
    }

    res.json(currency);
}

export { getCurrencies, getCurrencySymbol }