const express = require('express');
const {json} = require('express');
const connect = require('./config/database');
const taskRoute = require("./router/taskRoutes");
connect();

const app = express();
app.use(json());
app.use("/task", taskRoute);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=> {
    res.send('MongoDb task');
})

app.listen(3000, () => console.log(`serving on port ${PORT}`));