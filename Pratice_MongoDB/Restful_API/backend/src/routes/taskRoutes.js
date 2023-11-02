const express = require('express');
const { postTasks, getTasks, getOneTask, updateTasks, deleteTasks } = require('../controllers/taskControllers');
const router = express.Router();

router.get('/', getTasks);

router.get('/:id', getOneTask);

router.post('/', postTasks);

router.put('/:id', updateTasks);

router.delete('/:id', deleteTasks);

module.exports = router;