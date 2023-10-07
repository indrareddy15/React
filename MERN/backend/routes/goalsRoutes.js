const express = require('express');
const router = express.Router();

const { getGoals, postGoals, putGoals, deleteGoals } = require('../controllers/goalControllers');


router.route('/').get(getGoals).post(postGoals)

//Since get and post are having same routes they can be chained into one by using routes

// router.get('/', getGoals)
// router.post('/', postGoals)

router.route('/:id').put(postGoals).delete(deleteGoals);

//Similirly put and delete are having same routes they can be chained into one by using routes

// router.put('/:id', putGoals)
// router.delete('/:id', deleteGoals)

module.exports = router