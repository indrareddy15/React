const express = require('express')
const Workout = require('../models/workoutModels')

const router = express.Router()

// GET all workout
router.get('/', (req, res) => {
    res.json({ message: "GET all the workouts!" })
})

//GET single workout
router.get('/:id', (req, res) => {
    res.json({ message: 'GET single workout' })
})

//POST all workout
router.post('/', (req, res) => {
    const { title, load, reps } = req.body

    try {
        const workout = Workout.createOne({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(500).json({ error: "error in adding workouts" })
    }
    res.json({ message: "POST all the workouts!" })
})

//DELETE the workout
router.delete('/:id', (req, res) => {
    res.json({ message: "DELETE  the workouts!" })
})

//Update the workout
router.patch('/:id', (req, res) => {
    res.json({ message: "PATCH  the workouts!" })
})



module.exports = router