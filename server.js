var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cheerio = require('cheerio');
var request = require('request');
var axios = require('axios');
var db = require('./models'); 

var PORT = 3000; 
var app = express();

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nytreact", {
	useMongoClient: true
});

app.use(express.static(path.join(__dirname, 'nytreact/build')));

app.listen(PORT, () => {
	console.log("Running on port: " + PORT);
})

app.post("/api/articles", (req,res) => {
	db.Article.create()
});

app.get("/api/articles", (req,res) => {
	// res.json()
});

app.get("*", (req,res) =>{
	res.sendFile( path.resolve(__dirname, '..', 'nytreact/build', 'index.html'));
})

