/* Load modules */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

/* Database configuration */
const database = require('./database.js');

/* Init database */
database.init();

/* Init server listening */
const port = process.argv[2] || 3000;
app.listen(port, function () {
    console.log("Server listening on port : " + port);
});

/* Express configuration */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Router configuration */
const REST_API_ROOT = '/';
app.use(REST_API_ROOT, require('./app/route/router'));

app.get('/hello', function(req, res, next) {
    res.send("Hello world");
});

app.get('/Todo/findAll');




module.exports =app;