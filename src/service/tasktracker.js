const dbExecutor = require('../database/dbExecutor')

async function createTask(req, res)  {
    const task = req.body;
    const val = dbExecutor.createTask(req);
    res.send(`Create Task result is : ${JSON.stringify(val)}`);
}

async function getTask(req, res)  {
    try {
        const val = await dbExecutor.getTask();
        res.send({status: "success", data : val, msg : "Successfully fetched tasks."});
    } catch (error) {
        res.send({status: "error", msg: `Fetched error while getting task. ${error}`})
    }
}

module.exports = {createTask, getTask};