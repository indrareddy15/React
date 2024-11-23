const Router = require('express');
const { getAllUsers, getUserSearch, getUserById } = require('../controller/user.controller');
const { queryValidator } = require('../middlewares/queryValidator');

const router = Router();

router.get("/", getAllUsers);

router.get("/search", queryValidator, getUserSearch);

router.get("/:uuid", getUserById);


module.exports = router;