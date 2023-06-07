const express = require('express')
const router = express.Router();
const {createTask, getTask} = require('../service/tasktracker')

router.post('/createTask' , (req, res) => {
    createTask(req, res);
})

router.get("/getTask", (req, res) => {
    getTask(req, res);
})


module.exports = router;