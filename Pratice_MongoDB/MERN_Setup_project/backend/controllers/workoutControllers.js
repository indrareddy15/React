const Workout = require('../models/workoutModels')
const mongoose = require('mongoose');


//GET all workouts 
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).
        json(workouts)
}

//get single workout

const getSingleWorkouts = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "no such workout" })
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(400).json({ error: "no such workout" })
    }
    res.status(200).json(workout)
}

//post workout
const postWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!load) {
        emptyFields.push('load')
    }
    if (!reps) {
        emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Plaese fill the all fields', emptyFields })
    }

    // this is main post functionility 
    try {
        const workouts = await Workout.create({ title, load, reps })
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete the workouts

const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "no such workout" })
    }

    const workout = await Workout.findByIdAndDelete({ _id: id })

    if (!workout) {
        return res.status(400).json({ error: "no such workout" })
    }
    res.status(200).json(workout)

}

//update workout 
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such workout" })
    }

    const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body })

    if (!workout) {
        return res.status(400).json({ error: "no such workout" })
    }
    res.status(200).json(workout)
}


module.exports = {
    getAllWorkouts,
    getSingleWorkouts,
    postWorkout,
    deleteWorkout,
    updateWorkout
}