const express = require('express');

const app = express();

const port = 5000


app.get('/books', (req, res) => {
    res.json({ message: "Books Loaded Successfully" });
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});