const express = require('express')

const { postWorkout, getAllWorkouts, getSingleWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutControllers')

const router = express.Router()

// GET all workout
router.get('/', getAllWorkouts)

//GET single workout
router.get('/:id', getSingleWorkouts)

//POST all workout
router.post('/', postWorkout)

//DELETE the workout
router.delete('/:id', deleteWorkout)

//Update the workout
router.patch('/:id', updateWorkout)



module.exports = router