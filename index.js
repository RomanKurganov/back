const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const url = require('./routes/routes');



const http = require('http');
const https = require('https');
const fs = require('fs');

const dotenv = require('dotenv');
dotenv.config();

var app = express();

const PORT = process.env.PORT || 4000;

console.log(PORT)

// app.use(express.static('public'));
app.use('/resource', express.static(__dirname + '/resource'));
app.use(cors());
app.use(bodyParser.json());
app.use("/api", url);


mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}, function (err) {
    if (err) {
        return console.log(err);
    }

    // var httpServer = http.createServer(app);
    var httpsServer = https.createServer({
    }, app);

    // httpServer.listen(PORT, function () {
    //     console.log("Сервер ожидает подключения...", PORT);
    //
    // });
    httpsServer.listen(PORT, function () {
        console.log("Сервер ожидает подключения...", PORT);

    });
});