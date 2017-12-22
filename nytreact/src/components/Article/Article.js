import React, {Component} from "react";
import "./Article.css";

class Article extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="article">
				<strong>{this.props.headline}</strong>
				<p>{this.props.author}</p>
				<a href={this.props.url} target="__blank">link</a>
			</div>
		)
	}
}

export default Article;