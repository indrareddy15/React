const Router = require("express");
const { postSignup, postLogin } = require("../controller/auth.controller");

const { loginValidationSchema } = require("../validations/login.validation");
const { userValidationSchema } = require("../validations/user.validation");

const { validateSchema } = require("../middleware/user.middleware");

const userValidation = validateSchema(userValidationSchema);
const loginValidation = validateSchema(loginValidationSchema);


const router = Router();




router.post("/signup", userValidation, postSignup);
router.post("/login", loginValidation, postLogin);

module.exports = router