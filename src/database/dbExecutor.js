const mysql = require('./db').getConnection();

async function getAllTask(req) {
    var [result] = await mysql.query("select * from task");
    return result;
}

async function getTaskById(id) {
    var sqlStatement = "select * from task where id = ?";
    const sqlValues = [id];
    var [sqlResult] = await mysql.query(sqlStatement, sqlValues);
    return sqlResult;
}

async function updateTaskById(id, req) {
    const sqlStatement = `UPDATE task SET title=? , description=? , status=? , priority=?  where id = ?;`;
   const sqlValues = [req.body.title, req.body.description, req.body.status, req.body.priority, id ];
    var sqlResult = await mysql.query(sqlStatement, sqlValues);
    return sqlResult;
}

async function deleteTaskById(id) {
    var sqlStatement = "delete from task where id = ?";
    const sqlValues = [id];
    var sqlResult = await mysql.query(sqlStatement, sqlValues);
    return sqlResult;
}

async function createTask(req) {

   const sqlStatement = `INSERT INTO task (title, description, status, priority, user_id) VALUES (?, ?, ?, ?, 1);`;
   const sqlValues = [req.body.title, req.body.description, req.body.status, req.body.priority ];

   const result = await mysql.query(sqlStatement, sqlValues)
    return result;
}

module.exports = {
    getAllTask,
    createTask,
    getTaskById,
    updateTaskById,
    deleteTaskById
}