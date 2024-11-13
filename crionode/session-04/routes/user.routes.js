const Router = require('express')

const router = Router();
const { getAllUsers, getUserById, searchUsers } = require("../controllers/user.controller.js")


router.get("/", getAllUsers);
router.get("/search", searchUsers);
router.get("/:uuid", getUserById);

module.exports = { router }