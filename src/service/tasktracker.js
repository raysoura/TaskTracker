const dbExecutor = require('../database/dbExecutor')

async function createTask(req, res)  {
    const task = req.body;
    const val = dbExecutor.createTask(req);
    res.send(`Create Task result is : ${JSON.stringify(val)}`);
}

async function getAllTask(req, res)  {
    try {
        const val = await dbExecutor.getAllTask();
        res.send({status: "success", data : val, msg : "Successfully fetched tasks."});
    } catch (error) {
        res.send({status: "error", msg: `Fetched error while getting task. ${error}`})
    }
}

async function getTaskById(req, res)  {
    try {
        const id = req.params.id;
        const val = await dbExecutor.getTaskById(id);
        res.send({status: "success", data : val, msg : "Successfully fetched tasks."});
    } catch (error) {
        res.send({status: "error", msg: `Fetched error while getting task. ${error}`})
    }
}

async function updateTaskById(req, res)  {
    try {
        const id = req.params.id;
        const val = await dbExecutor.getTaskById(id);
        res.send({status: "success", data : val, msg : "Successfully fetched tasks."});
    } catch (error) {
        res.send({status: "error", msg: `Fetched error while getting task. ${error}`})
    }
}

async function deleteTaskById(req, res)  {
    try {
        const id = req.params.id;
        const val = await dbExecutor.getTaskById(id);
        res.send({status: "success", data : val, msg : "Successfully fetched tasks."});
    } catch (error) {
        res.send({status: "error", msg: `Fetched error while getting task. ${error}`})
    }
}

module.exports = {
    createTask, 
    getAllTask, 
    getTaskById,
    updateTaskById,
    deleteTaskById
};