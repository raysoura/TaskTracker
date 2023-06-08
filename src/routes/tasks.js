const express = require('express')
const router = express.Router();
const {createTask, getAllTask, getTaskById} = require('../service/tasktracker')

router.post('/createTask' , (req, res) => {
    createTask(req, res);
})

router.get("/getAllTask", (req, res) => {
    getAllTask(req, res);
})

router.get("/getTask/:id", (req, res) => {
    getTaskById(req, res);
})

router.get("/getTask/:id", (req, res) => {
    getTaskById(req, res);
})

router.put("/updateTask/:id", (req, res) => {
    updateTaskById(req, res);
})

router.delete("/deleteTask/:id", (req, res) => {
    updateTaskById(req, res);
})

module.exports = router;