var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cheerio = require('cheerio');
var request = require('request');
var axios = require('axios');

var PORT = 3000;
var app = express();

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nytreact", {
	useMongoClient: true
});

app.listen(PORT, () => {
	console.log("Running on port: " + PORT);
	getArticle();
})

app.get("/", (req,res) => {
	console.log("hi");
});

app.get("/api/articles", (req,res) => {
	// res.json()
});


function getArticle() {
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += "?api-key=cecdb7f428d1453f9c06b3d679b784eb&q=california" 
	
	$.ajax({
		url: url,
		method: "GET",
	}).done(res => {
		console.log(res);
	}).fail(err => {
		throw err;	
	});
}

