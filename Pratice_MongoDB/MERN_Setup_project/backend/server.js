const express = require('express')

//express app
const app = express()

const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const uri = ""

const workoutRoutes = require("./routes/workouts")

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})


//routes
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

//listining port
