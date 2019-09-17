const express = require("express");
const mongoose =require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const url = require('./routes/routes');
const dotenv = require('dotenv');
dotenv.config();

var app = express();

const PORT = process.env.PORTOS || 4000;

app.use(express.static('public'));
app.use('/resource', express.static(__dirname + '/resource'));
app.use(cors());
app.use(bodyParser.json());
app.use("/api", url);


mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}, function (err) {
    if (err) {
        return console.log(err);
    }
    app.listen(PORT, function() {
        console.log("Сервер ожидает подключения...", PORT);

    });
});