import { taskSchema } from "../models/taskModel";

//create task
const createTask = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;
        const task = await task.create({
            data:
                { title, description, status, priority }
        })
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
        const task = await task.find();
        res.json();
    }
    catch (error) {
        res.status(401).json({
            error: error.message
        })
    }
}


//get single task (GET/:id)

const getSingleTask = async (req, res) => {

    const task = await task.findById(req.params.id)
    if (!task) {
        return res.status(404).json({
            message: "not found"
        })
    }
    res.status(200).json(task)
}


//update a task fully(PUT)
const updateTask = async (req, res) => {
    const task = await task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true

    })

    if (!task) {
        res.status(404).json({
            message: "Not found"
        })
    }
    res.status(201).json(task)
}

//Patch
const patchTask = async (req, res) => {
    const task = await task.findByIdAndUpdate(req.params.id,
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
    res.status(201).json(task)
}

//delete task

const deleteTask = async (req, res) => {
    const task = await findByIdAndDelete(req.params.id)

    if (!task) {
        res.status(404).json({
            message: "Not found"
        })
    }
    res.status(201).json(task)
}

export {
    createTask,
    updateTask,
    deleteTask,
    getAllTasks,
    getSingleTask,
    patchTask

}