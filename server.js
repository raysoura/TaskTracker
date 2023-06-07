const express = require('express');
// require('./src/database/db');

const app = express();
const port = 4000;
const taskRouter = require('./src/routes/tasks')

app.use(express.json());
app.use('/tasks', taskRouter);

app.listen(port, ()=> {
    console.log("The server has been successfully started at port: ", port);
})