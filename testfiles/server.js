/* eslint-disable no-template-curly-in-string */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,DELETE',
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

const users = [];

app.post('/api/register', (req, res) => {
    const { name, email, password, mobile } = req.body;

    console.log('Recieved a registration request: ', { name, email, password, mobile });
    users.push({ name, email, password, mobile });

    res.json({ message: 'user registered successfully' });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    console.log('Recieved a login request: ', { email, password });
    const user = users.find((u) => u.email === email)

    if (!user) {
        return res.status(401).json({ message: 'Invalid credntials' });
    }

    if (user.password === password) {
        return res.json({ message: 'Login Successfull' });
    } else {
        return res.status(401).json({ message: 'Invalid credntials' });
    }
});
app.get('/', (req, res) => {
    res.send('Hello, this is the server');
});

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);

});