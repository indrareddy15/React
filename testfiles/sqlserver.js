// npm install mysql2 install 

/* eslint-disable no-template-curly-in-string */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2'); // Import the mysql2 package

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

// Create a MySQL database connection pool
const pool = mysql.createPool({
    host: 'your_mysql_host', // Replace with your MySQL host
    user: 'your_mysql_user', // Replace with your MySQL user
    password: 'your_mysql_password', // Replace with your MySQL password
    database: 'your_mysql_database', // Replace with your MySQL database
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test the MySQL connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
    connection.release();
});

const users = [];

app.post('/api/register', (req, res) => {
    const { name, email, password, mobile } = req.body;

    console.log('Received a registration request: ', { name, email, password, mobile });
    users.push({ name, email, password, mobile });

    res.json({ message: 'User registered successfully' });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    console.log('Received a login request: ', { email, password });

    // You can use the MySQL connection pool to execute SQL queries here
    // For example: pool.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => { ... });

    const user = users.find((u) => u.email === email);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (user.password === password) {
        return res.json({ message: 'Login successful' });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.get('/', (req, res) => {
    res.send('Hello, this is the server');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

