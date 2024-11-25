const Router = require("express");
const { registerUser, getAllUsers, getUserByName } = require("../controllers/user.controller");
const { validateUser } = require("../validations/userValidationsSchema");
const { validateApiKey } = require("../middleware/userauth");

const router = Router();


router.post("/register", validateUser, registerUser);

router.get("/all", validateApiKey, getAllUsers)

router.get("/:userName", getUserByName)


module.exports = router