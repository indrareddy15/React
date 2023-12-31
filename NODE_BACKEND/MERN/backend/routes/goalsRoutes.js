const express = require('express');
const router = express.Router();

const { getGoals, postGoals, putGoals, deleteGoals } = require('./goalsRoutes');
// import { getGoals, postGoals, putGoals, deleteGoals } from '../../controllers/goalControllers';

// router.route('/').get(getGoals).post(postGoals)
// Since get and post are having same routes they can be chained into one by using routes

router.get('/', getGoals)

router.post('/', postGoals)

// Similirly put and delete are having same routes they can be chained into one by using routes
// router.route('/:id').put(putGoals).delete(deleteGoals);


router.put('/:id', putGoals)

router.delete('/:id', deleteGoals)

module.exports = router