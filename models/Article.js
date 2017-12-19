var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
		required: "Article needs title"
	},
	date: {
		type: String,
		required: "Article needs date published"
	},
	url: {
		type: String,
		required: "Article needs url"
	}
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;