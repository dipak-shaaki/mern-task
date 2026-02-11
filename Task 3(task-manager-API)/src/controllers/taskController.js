import Task from "../models/taskModel.js";

//create task
const createTask = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;
        const task = await Task.create({ title, description, status, priority })
        res.status(201).json(task)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })

    }
}

//Get the tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(401).json({
            error: error.message
        })
    }
}


//get single task (GET/:id)

const getSingleTask = async (req, res) => {
    const task = await Task.findById(req.params.id)
    if (!task) {
        return res.status(404).json({
            message: "not found"
        })
    }
    res.status(200).json(task)
}


//update a task fully(PUT)
const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true

    })

    if (!task) {
        res.status(404).json({
            message: "Not found"
        })
    }
    res.status(200).json(task)
}

//Patch
const patchTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id,
        req.body, {
        new: true,
        runValidators: true
    }
    )
    if (!task) {
        res.status(404).json({
            message: "Not found"
        })
    }
    res.status(200).json(task)
}

//delete task

const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)

    if (!task) {
        res.status(404).json({
            message: "Not found"
        })
    }
    res.status(200).json(task)
}

export default {
    createTask,
    updateTask,
    deleteTask,
    getAllTasks,
    getSingleTask,
    patchTask
}
