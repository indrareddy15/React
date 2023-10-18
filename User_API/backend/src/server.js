const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

//exxpress app
const app = express();

// port number for express 
const port = process.env.PORT || 5000;

//middleware for post requests to get json responses
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.body, req.path, req.method);
    next();
})

//routes
app.use('/api/users', userRoutes)

//connect to the DataBase
// const uri = ""
// mongoose.connect(uri)
//     .then(() => {
//         //pass the port here
//         app.listen(port, () => {
//             console.log(`Server listening on ${port}`)
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// Remove the code once you have connted to database
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});

