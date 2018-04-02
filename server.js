var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cheerio = require('cheerio');
var request = require('request');
var axios = require('axios');
var morgan = require('morgan');
var db = require('./models');

var PORT = process.env.PORT || 3000;
var app = express();

mongoose.Promise = Promise;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

mongoose.connect(MONGODB_URI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

app.use(express.static(path.join(__dirname, '/react-test/build/')));

app.post("/api/articles", (req,res) => {
	db.Article.create()
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/react-test/build/index.html'));
});

app.listen(PORT, () => {
    console.log('Running on port:' + PORT);
});
