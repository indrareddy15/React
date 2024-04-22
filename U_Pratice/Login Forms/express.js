const express = require('express');
const fs = require('fs');
const cors = require('cors');


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/SavedData', cors());

app.post('/SavedData', (req, res) => {
    const jsonData = req.body;
    const fileName = 'data.json';

    fs.writeFile(fileName, JSON.stringify(jsonData), (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error saving data' });
        } else {
            console.log('Data saved successfully');
            res.status(200).json({ message: 'Data saved successfully' });
        }
    });
});

app.get('/getData', (req, res) => {
    const fileName = 'data.json';

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error retrieving data' });
        } else {
            const jsonData = JSON.parse(data);
            res.status(200).json(jsonData);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
