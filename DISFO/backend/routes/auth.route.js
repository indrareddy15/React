const Router = require("express")
const { postSignup, postLogin } = require("../controllers/auth.controller")

const { userValidationSchema } = require("../validations/user.validator");
const { loginValidationSchema } = require("../validations/login.validator");
const { validateSchema } = require("../middlewares/validate.middleware");

const router = Router()
const validateUser = validateSchema(userValidationSchema)
const validateLogin = validateSchema(loginValidationSchema)

router.post("/signup", validateUser, postSignup)
router.post("/login", validateLogin, postLogin)

module.exports = router
