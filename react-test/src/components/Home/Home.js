import React, { Component } from "react";
import "./Home.css";
import Article from "../../components/Article";
import API from "../../utils/API.js";

class Home extends Component {
  constructor(props) {
  	super(props);

    this.state = {
      articles: [],
      topic: "", 
      start: "",
      end: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    API.search("california")
      .then(res => this.setState({articles: res.data.response.docs}))
      .catch(err => console.log(err));
  }

  handleChange(event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value.trim()
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    var url = this.state.topic;
    
    if(this.state.start) url+= "&begin_date=" + this.state.start; 
    if(this.state.end) url+= "&end_date=" + this.state.end;
    // console.log(url);
    API.search(url)
      .then(res => this.setState({articles: res.data.response.docs}))
      .catch(err => console.log(err));
  }

  render() {
  	return(
      <div>
        <div className="header">
          <h2>Nyt React</h2>
        </div>
        <div className="search">
            <h4>Search</h4>
            <div>
              <form onSubmit={this.handleSubmit}>
                <p>Topic</p>
                <input 
                  type="text"
                  name="topic"
                  onChange={this.handleChange}
                />
                <p>Start Year</p>
                <input 
                  type="text"
                  name="start"
                  placeholder="yyyy/mm/dd"
                  onChange={this.handleChange}
                />
                <p>End Year</p>
                <input 
                  type="text"
                  name="end"
                  placeholder="yyyy/mm/dd"
                  onChange={this.handleChange}
                />
                <button>Search</button>
              </form>
            </div>
        </div>
        <div className="display">
          {this.state.articles.length ? (
            <div>
              <h4>Articles</h4>
              {this.state.articles.map(article => {
                return (
                  <Article 
                    key={article._id}
                    id={article._id}
                    headline={article.headline.main}
                    author={article.byline ? article.byline.original : "No author found"}
                    url={article.web_url}
                    date={article.pub_date}
                  />
                )
              })}
            </div>
          ):(
            <h4>No Articles Yet</h4>
          )}
        </div>
        <div className="footer">
          <p>thanks for visiting</p>
        </div>
      </div>
  	);
  }
}

export default Home;
