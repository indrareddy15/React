const Router = require("express");
const { createUser, loginUser } = require("../controller/auth.controller");
const authorize = require("../middleware/authorize-jwt.middleware");


const router = Router()

router.post("/signup", createUser);
router.post("/login", authorize, loginUser)


module.exports = router;