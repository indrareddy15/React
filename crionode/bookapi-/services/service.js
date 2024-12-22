const Book = require('../model/model');

class BookService {
    createBook = async ({ title, author, ISBN, publicationDate, price, currency }) => {
        try {
            const newBook = new Book({ title, author, ISBN, publicationDate, price, currency });
            await newBook.save();
            return newBook;
        } catch (error) {
            console.error('Error in creating book', error);
            throw new Error('Error in creating book');
        }
    }

    getBooks = async () => {
        try {
            const books = await Book.find();
            return books;
        } catch (error) {
            console.error('Error in getting books', error);
            throw new Error('Error in getting books');
        }
    }

    findBookByISBN = async (ISBN) => {
        try {
            const book = await Book.findOne({ ISBN });
            return book;
        } catch (error) {
            console.error('Error in finding book by ISBN', error);
            throw new Error('Error in finding book by ISBN');
        }
    }

    findBookByPriceAndCurrency = async (price, currency) => {
        try {
            const book = await Book.findOne({ price, currency });
            return book;
        } catch (error) {
            console.error('Error in finding book by price and currency', error);
            throw new Error('Error in finding book by price and currency');
        }
    }
}

module.exports = BookService;