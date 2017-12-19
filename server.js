var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var cheerio = require('cheerio');
var request = require('request');
// var axios = require('axios');

var PORT = 3000;
var app = express();

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nytreact", {
	useMongoClient: true
});

app.listen(PORT, () => {
	console.log("Running on port: " + PORT);
})

app.get("/home", (req,res) => {
	res.send("hi");
});