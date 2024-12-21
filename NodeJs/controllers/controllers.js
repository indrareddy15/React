const BookService = require('../services/service');
const BookServiceInstance = new BookService();


const createBook = async (req, res) => {
    const { title, author, ISBN, publicationDate, price, currency } = req.body;
    try {
        const newBook = await BookServiceInstance.createBook({ title, author, ISBN, publicationDate, price, currency });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getBooks = async (req, res) => {
    try {
        const books = await BookServiceInstance.getBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const findBookByISBN = async (req, res) => {
    try {
        const book = await BookServiceInstance.findBookByISBN(req.params.ISBN);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const findBookByPriceAndCurrency = async (req, res) => {
    const { price, currency } = req.body;

    if (!price || !currency) {
        return res.status(400).json({ message: 'Please provide price and currency' });
    }
    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber)) {
        return res.status(400).json({ message: 'Price should be a number' });
    }
    try {
        const book = await BookServiceInstance.findBookByPriceAndCurrency(priceNumber, currency);
        if (!book) {
            return res.status(404).json({ message: 'No books found matching the given price and currency' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createBook, getBooks, findBookByISBN, findBookByPriceAndCurrency };