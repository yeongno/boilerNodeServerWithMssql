const express = require('express')
const config = require('./src/config/config')
const memberRoutes = require('./routes/member');
const app = express()
const Connection = require('tedious').Connection;
var connection = new Connection(config.dbconfig);

app.listen(3000, function() {
    console.log("start! express server on port 3000")
})

app.use(express.json());

app.use('/member', memberRoutes);

connection.connect();
