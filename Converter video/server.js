const express = require('express');
const cors = require('cors');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Configure multer to store uploaded files
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/convert', upload.single('video'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }

    const inputBuffer = req.file.buffer;

    ffmpeg()
        .input(inputBuffer)
        .toFormat('mp4')
        .on('end', () => {
            console.log('Conversion finished.');
        })
        .on('error', (err) => {
            console.error('Error:', err);
            res.status(500).json({ message: 'Conversion failed.' });
        })
        .pipe(res, { end: true });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
