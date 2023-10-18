const express = require("express");

const {
    getUsers,
    getOneUser,
    postUsers,
    updateUsers,
    deleteUsers,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getUsers);

router.get("/", getOneUser);

router.post("/", postUsers);

router.patch("/:id", updateUsers);

router.delete("/:id", deleteUsers);

module.exports = router;
