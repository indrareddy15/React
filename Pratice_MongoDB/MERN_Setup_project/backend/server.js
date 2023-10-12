const express = require('express')

//express app
const app = express()

const port = process.env.PORT || 5000;

const workoutRoutes = require("./routes/workouts")

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})


//routes
app.use('/api/workouts', workoutRoutes)


//listining port
app.listen(port, () => console.log(`Server started at ${port}`));