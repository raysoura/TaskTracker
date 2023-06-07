const dbExecutor = require('../database/dbExecutor')

async function createTask(req, res)  {
    const task = req.body;
    console.log("Task is: ", task);
    const val = dbExecutor.getTask();
    res.send(`DB result is : ${JSON.stringify(val)}`);
}

async function getTask(req, res)  {
    const val = dbExecutor.getTask();
    console.log("Val: ", val);
    res.send(`DB result is : ${JSON.stringify(val)}`);
}

module.exports = {createTask, getTask};