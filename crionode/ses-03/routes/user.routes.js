import { Router } from 'express';
import { getAllUsers, getUserById, searchUsers } from '../controllers/user.controller.js';

const router = Router();

router.get("/", getAllUsers);
router.get("/search", searchUsers);
router.get("/:uuid", getUserById);

export default router;