const mysql = require('./db').getConnection();

async function getTask(req) {
    var [result] = await mysql.query("select * from task");
    return result;
}

async function createTask(req) {

   const sqlStatement = `INSERT INTO task (title, description, status, priority) VALUES (?, ?, ?, ?);`;
   const sqlValues = [req.body.title, req.body.description, req.body.status, req.body.priority ];

   const result = await mysql.query(sqlStatement, sqlValues)
   console.log("Result: ", result);
    return result;
}

module.exports = {
    getTask,
    createTask
}