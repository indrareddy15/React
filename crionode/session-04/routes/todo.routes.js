const Router = require("express");
const { getAllTodos, getTodoStatus, getTodoById } = require("../controllers/todo.controller");

const router = Router();

router.get("/", getAllTodos);
router.get("/status", getTodoStatus);
router.get("/:userId", getTodoById);

module.exports = { router }