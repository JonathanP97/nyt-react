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
      start_year: "",
      start_month: "",
      start_day: "",
      end_year: "",
      end_month: "",
      end_day: ""
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
    console.log(this.state);
    var url = this.state.topic;

    if(this.state.start_year && this.state.start_month && this.state.start_day) {
      var start_url = this.state.start_year + this.state.start_month + this.state.start_day;
      url+= "&begin_date=" + start_url; 
    }

    if(this.state.end_year && this.state.end_month && this.state.end_day) {
      var end_url = this.state.end_year + this.state.end_month + this.state.end_day;
      url+= "&end_date=" + end_url; 
    }

    console.log(start_url);
    console.log(end_url);
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
                <div id="date-container">
                  <input
                    id="date-input" 
                    type="text"
                    name="start_year"
                    placeholder="yyyy"
                    onChange={this.handleChange}
                  />                
                  <input 
                    id="date-input" 
                    type="text"
                    name="start_month"
                    placeholder="mm"
                    onChange={this.handleChange}
                  />            
                  <input 
                    id="date-input" 
                    type="text"
                    name="start_day"
                    placeholder="dd"
                    onChange={this.handleChange}
                  />
                </div>
                <p>End Year</p>
                <div id="date-container">
                  <input
                    id="date-input" 
                    type="text"
                    name="end_year"
                    placeholder="yyyy"
                    onChange={this.handleChange}
                  />                
                  <input 
                    id="date-input" 
                    type="text"
                    name="end_month"
                    placeholder="mm"
                    onChange={this.handleChange}
                  />            
                  <input 
                    id="date-input" 
                    type="text"
                    name="end_day"
                    placeholder="dd"
                    onChange={this.handleChange}
                  />
                </div>
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
