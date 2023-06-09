const dbExecutor = require('../database/dbExecutor')

async function createTask(req, res)  {
    try {
        const val = await dbExecutor.createTask(req);
        res.send({status: "success", data : req.body, msg : "Successfully created task."});
    } catch (error) {
        res.send({status: "error", msg: `Fetched error while creating tasks. ${error}`})
    }
}

async function getAllTask(req, res)  {
    try {
        const val = await dbExecutor.getAllTask();
        res.send({status: "success", data : val, msg : "Successfully fetched tasks."});
    } catch (error) {
        res.send({status: "error", msg: `Fetched error while getting all tasks. ${error}`})
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
        const val = await dbExecutor.updateTaskById(id, req);
        res.send({status: "success", data : req.body, msg : "Successfully fetched tasks."});
    } catch (error) {
        console.log("Error: ", error);
        res.send({status: "error", msg: `Fetched error while updating task. ${error}`})
    }
}

async function deleteTaskById(req, res)  {
    try {
        const id = req.params.id;
        const val = await dbExecutor.deleteTaskById(id);
        res.send({status: "success", data : val, msg : "Successfully fetched tasks."});
    } catch (error) {
        res.send({status: "error", msg: `Fetched error while deleting task. ${error}`})
    }
}

module.exports = {
    createTask, 
    getAllTask, 
    getTaskById,
    updateTaskById,
    deleteTaskById
};