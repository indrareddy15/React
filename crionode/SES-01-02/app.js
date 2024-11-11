const express = require("express");
const app = express()
const port = 8084;

let todoList = ["Complete Node Byte", "Play Cricket"];

app.use(express.json());

app.get("/todos", (req, res) => {
    return res.json(todoList)
})

app.post("/todos", (req, res) => {
    const { name } = req.body

    if (name) {
        todoList.push(name)
        return res.status(201).send("Todo is Created.")
    } else {
        return res.status(400).send("Bad Request: 'name' property is requried")
    }
})

app.delete("/todos", (req, res) => {
    const { name } = req.body;

    if (name) {
        const idx = todoList.indexOf(name)
        if (isx !== -1) {
            todoList.splice(isx, 1)
            return res.status(204).send()
        } else {
            return res.status(404).send("Not Found: Todo item does not exist.");
        }
    }
    return res.status(400).send("Bad Request: 'name' property is required.");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});