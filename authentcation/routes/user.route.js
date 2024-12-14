const Router = require("express");
const { postUser, getAllUser, getUserByName } = require("../controller/user.controller");
const { validateSchema } = require("../middleware/user.middleware")
const { userValidationSchema } = require("../validations/user.validation");
const authorize = require("../middleware/authorize-jwt.middleware")
// const authorize = require("../middleware/authorize-passport")

const router = Router();

const validateUser = validateSchema(userValidationSchema)

router.post("/post", validateUser, postUser);
router.get("/all", getAllUser);
router.get("/:username", authorize, getUserByName);

module.exports = router
