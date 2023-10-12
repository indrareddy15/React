const express = require("express");
const { conntectDB, getDB } = require("./db");
const { ObjectId } = require("mongodb");

const app = express();
const port = 5000;
app.use(express.json());

//db connection
let db;

conntectDB((err) => {
    if (!err) {
        //start listining the request
        app.listen(port, () => {
            console.log(`Server listening on ${port}`);
        });
        db = getDB();
    }
});




app.get("/books", (req, res) => {
    //Pagination in MongoDB is a technique used to divide a large dataset into smaller
    const pages = req.query.p || 0;
    const booksPerPage = 3

    let books = [];
    console.log(db);
    //connection is method similarly db.books
    db.collection("books")
        .find() //return the curser method
        .sort({ author: 1 }) //return the curser method
        .skip(pages * booksPerPage)
        .limit(booksPerPage)
        .forEach((book) => {
            books.push(book);
        })
        .then(() => {
            return res.status(200).json(books);
        })
        .catch(() => {
            res.status(500).json({ error: "Could not find books document" });
        });
});

// ObjectIds as the default value of _id field of each document,
// which is generated during the creation of any document.
// Object ID is treated as the primary key within any MongoDB collection

app.get("/books/:id", (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection("books")
            .findOne({ _id: new ObjectId(req.params.id) })
            .then((doc) => {
                res.status(200).json(doc);
            })
            .catch(() => {
                res
                    .status(500)
                    .json({ error: "Couldn't find document" })
            });
    } else {
        res.status(500).json({
            error: "Couldn't find document with id " + req.params.id
        })
    }
});

app.post('/books', (req, res) => {
    const book = req.body;

    db.collection('books')
        .insertOne(book)
        .then((result) => {
            res.status(201).json({ result })
        })
        .catch(() => {
            res.status(501).json({ error: "Couldn't insert book" })
        })
})


app.delete('/books/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
            .deleteOne({ _id: new ObjectId(req.params.id) })
            .then((result) => {
                res.status(202).json({ result })
            })
            .catch(() => {
                res.status(502).json({ error: "Couldn't delete book" })
            })
    }
    else {
        res.status(500).json({
            error: "Couldn't delete with id " + req.params.id
        })
    }
})

app.patch('/books/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
            .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
            .then((result) => {
                res.status(200).json({ result })
            })
            .catch(() => {
                res.status(500).json({ error: "Couldn't update with id " })
            })
    } else {
        res.status(500).json({ error: "Couldn't update with id " + req.params.id })
    }
})
