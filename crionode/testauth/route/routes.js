const Router = require("express");
const { createUser, getAllUsers, findUserByName } = require("../controller/user.controller");
const { authorization } = require("../middleware/simpelauth");
const { userValidation } = require("../validations/user.validation");
const { validateMiddleware } = require("../middleware/validate.middleware");

const router = Router()

const validateUser = validateMiddleware(userValidation)

router.post("/create", validateUser, createUser)
router.get("/all", authorization, getAllUsers)
router.get("/:username", findUserByName)

module.exports = router;