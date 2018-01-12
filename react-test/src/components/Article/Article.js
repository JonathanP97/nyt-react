import React, {Component} from "react";
import "./Article.css";

class Article extends Component {
	constructor(props) {
		super(props);
		this.saveArticle = this.saveArticle.bind(this);
	}

	saveArticle(id, event) {
		console.log(id);
	}
	2
	render() {
		return (
			<div className="article">
				<strong>{this.props.headline}</strong>
				<p>{this.props.author}</p>
				<p>published: {this.props.date}</p>
				<a href={this.props.url} target="__blank">link</a>
				<button onClick={this.saveArticle.bind(this, this.props.id)}>Save</button>
			</div>
		)
	}
}

export default Article;