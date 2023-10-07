const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();
//express. json() function is a middleware function to parse incoming JSON data from HTTP requests
app.use(express.json()); 
//allows to choose between parsing the URL-encoded data with the querystring library (when false ) 
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalsRoutes.js'))

app.listen(port, () => console.log(`Server started at ${port}`));