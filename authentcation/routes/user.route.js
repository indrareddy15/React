const Router = require("express");
const { postUser, getAllUser, getUserByName } = require("../controller/user.controller");

const router = Router();

router.post("/post", postUser);
router.get("/all", getAllUser);
router.get("/:username", getUserByName);

module.exports = router
