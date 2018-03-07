import React, {Component} from "react";
import "./Article.css";

class Article extends Component {
	constructor(props) {
		super(props);
		this.saveArticle = this.saveArticle.bind(this);
		this.state = {
			date : null,
		}
	}

	componentDidMount() {
		var date = this.props.date;

		// /SomEThing/gi --> for case sensitive
		var seperate = date.slice(0, 10).replace(/-/g, " ");
		this.setState({date: seperate});
	}

	saveArticle(id, event) {
		console.log(id);
	}
	
	render() {
		return (
			<div className="article">
				<a href={this.props.url} target="__blank">{this.props.headline}</a>
				<p>{this.props.author}</p>
				<p>Published: {this.state.date}</p>
				
				{/* <button onClick={this.saveArticle.bind(this, this.props.id)}>Save</button> */}
			</div>
		)
	}
}

export default Article;