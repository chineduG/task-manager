const Task = require('../models/Task')

const getAllTask = (req, res) => {
    res.send('Get all task');
}

const createTask =  async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task });
}

const getTask = (req, res) => {
    res.json({ id: req.params.id});
}

const updateTask = (req, res) => {
    res.json({id: req.params.id});
}
const deleteTask = (req, res) => {
    res.send('Delete task');
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}