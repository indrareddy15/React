const express = require('express');

const { loginUser, signUpUser } = require('../controllers/userControllers')


const router = express.Router();

//login user
router.post('/login', loginUser)

//sign up user
router.post('/signup', signUpUser)


module.exports = router; 