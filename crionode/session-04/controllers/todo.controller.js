const todoJson = require("../controllers/todo.json");
const { statusQuerySchema, userIDParamSchema } = require("../validations/todoValidations");


const getAllTodos = (req, res) => {
    res.send(todoJson)
}

const getTodoStatus = (req, res) => {
    const result = statusQuerySchema.validate(req.query);
    console.log(result)

    if (result.error) {
        return res.status(400).send({ message: error.details[0].message })
    }
    const { status } = req.query

    const statusBool = status === 'true';

    const todoStatus = todoJson.filter((todo) => todo.completed === statusBool)

    if (!todoStatus) {
        return res.status(404).send({ message: `No Todos found with status ${status}` })
    }

    res.send(todoStatus)
}

const getTodoById = (req, res) => {
    const result = userIDParamSchema.validate(req.params)

    if (result.error) {
        return res.status(400).send({ message: error.details[0].message })
    }
    const { userId } = req.params

    const todo = todoJson.filter((id) => id.userId === parseInt(userId, 10))

    if (!todo) {
        return res.status(404).send({ message: `Todo item with ${userId} is not found` })
    }

    res.send(todo)
}



module.exports = { getAllTodos, getTodoStatus, getTodoById }
