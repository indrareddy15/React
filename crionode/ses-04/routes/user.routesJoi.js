import { Router } from 'express';
// import { getAllUsers, getUserById, searchUsers } from '../controllers/user.controller.js';
import { getAllUsers, getUserById, searchUsers } from '../controllers/user.controllerJoi.js';

// const Router = require('express');
// const { getAllUsers, getUserById, searchUsers } = require('../controllers/user.controllerJoi.js');

export const router = Router();

router.get("/", getAllUsers);
router.get("/search", searchUsers);
router.get("/:uuid", getUserById);

// module.exports = { router };