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
      state_date: "",
      end_date: ""
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
    console.log(name);
    console.log(event.target.value.length);
    this.setState({
      [name]: event.target.value.trim()
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    var url = this.state.topic;

    if(this.state.start_date) {
      var start_url = this.state.start_date;
      url+= "&start_date=" + start_url; 
    }

    if(this.state.end_date) {
      var end_url = this.state.end_date;
      url+= "&end_date=" + end_url; 
    }

    console.log(url);

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
            <h4 id="form-header">Search</h4>
            <div id="border-bottom"></div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <input 
                  type="text"
                  name="topic"
                  placeholder="topic"
                  onChange={this.handleChange}
                />
                <p>Start Year</p>
                <input 
                  id="date-input"
                  type="date"
                  name="start_date"
                  onChange={this.handleChange}                  
                />
                <p>End Year</p>
                <input 
                  id="date-input"
                  type="date"
                  name="end_date"
                  onChange={this.handleChange}                  
                />
                <button>Search</button>
              </form>
            </div>
        </div>
        <div className="display">
          {this.state.articles.length ? 
            <div className="ignore">
              <h3>Articles</h3>
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
          :
            <h3>No Articles Yet</h3>
          }
        </div>
        <div className="footer">
          <p>thanks for visiting</p>
        </div>
      </div>
  	);
  }
}

export default Home;
