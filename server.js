var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cheerio = require('cheerio');
var request = require('request');
var axios = require('axios');
var morgan = require('morgan');
var db = require('./models');

var PORT = 3000;
var app = express();

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nytreact", {
	useMongoClient: true
})
.catch(function(error) {
	console.log('this is error: ', error);
})

app.use(express.static(path.join(__dirname, '/react-test/build/')));

app.post("/api/articles", (req,res) => {
	db.Article.create()
});

app.get("/api/articles", (req,res) => {

});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/react-test/build/index.html'));
});

app.listen(PORT, () => {
    console.log('Running on port: ' + PORT);
});
