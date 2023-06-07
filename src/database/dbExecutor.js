const mysql = require('./db').getConnection();

async function getTask(req) {
    var result = mysql.query("select * from task");
    return result;
}

module.exports = {
    getTask
}