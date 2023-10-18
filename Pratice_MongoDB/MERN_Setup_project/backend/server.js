const express = require('express')
const workoutRoutes = require("./routes/workouts")
const mongoose = require('mongoose');

//express app
const app = express()
const port = process.env.PORT || 5000;

const uri = ""


// middleware
app.use(express.json())

// For Testing we have used app.use and consoled what is happening in req, res and next
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})


// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(uri)
    .then(() => {
        app.listen(port, () => {
            console.log(`Connected to DB and Server started at ${port}`)
        });
    })
    .catch((error) => {
        console.log(error);
    })
