const express = require('express')
const workoutRoutes = require("./src/routes/workouts")
const userRoutes = require('./src/routes/user')
const mongoose = require('mongoose');

//express app
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(express.json())

// For Testing we have used app.use and consoled what is happening in req, res and next
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})


// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
// const uri = ""
// mongoose.connect(uri)
//     .then(() => {
//         app.listen(port, () => {
//             console.log(`Connected to DB and Server started at ${port}`)
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     })

app.listen(port, () => {
    console.log(`Server started at ${port}`)
});
