const express = require('express');
const Task = require("../model/taskmodel");

//Get all tasks 
const getTasks = async (req, res) => {
    const tasks = await Task.find({}).sort({ createdAt: -1 })
    res.status(200).
        json(tasks)
}

const getOneTask = async (req, res) => {
    const { id } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "no such Task Type " })
    }

    const tasks = await Task.findById({ _id: id })
    if (!tasks) {
        return res.status(400).json({ error: "no such Task" })
    }
    res.status(200).json(workout)
}

const postTasks = async (req, res) => {
    const { title, description, completed } = req.body
    try {
        const tasks = await Task.create({ title, description, completed });
        req.status(200).json({ tasks })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteTasks = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "no such Task Type" })
    }

    const task = await Task.findByIdAndDelete({ _id: id })
    if (!task) {
        return res.status(400).json({ error: "no such task" })
    }
    res.status(200).json(task)
}

const updateTasks = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such task Type" })
    }

    const task = await Task.findByIdAndUpdate({ _id: id }, { ...req.body })

    if (!task) {
        return res.status(400).json({ error: "no such workout" })
    }
    res.status(200).json(task)
}


// const postTasks = async (req, res) => {
//     try {
//         const tasks = new Task(req.body);
//         await tasks.save();
//         req.status(200).json(tasks)
//     } catch (error) {
//         res.status(400).json({ error: "Failed to create Task" })
//     }
// }

module.exports = {
    getTasks,
    getOneTask,
    postTasks,
    deleteTasks,
    updateTasks
}