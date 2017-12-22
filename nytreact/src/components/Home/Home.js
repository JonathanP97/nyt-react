import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
  	super(props);

    this.state = {
      topic: "",
      start: "",
      end: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.topic);
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=cecdb7f428d1453f9c06b3d679b784eb&";
    url += "q=" + this.state.topic;
    // if(this.state.start) {
    //   url+= 
    // } 
    fetch(url).then(result => result.json()).then(result => {
      console.log(result);
    })

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
                <label>Topic</label>
                <input 
                  type="text"
                  name="topic"
                  onChange={this.handleChange}
                />
                <label>Start Year</label>
                <input 
                  type="text"
                  name="start"
                  onChange={this.handleChange}
                />
                <label>End Year</label>
                <input 
                  type="text"
                  name="end"
                  onChange={this.handleChange}
                />
                <button>Search</button>
              </form>
            </div>
        </div>
      </div>
  	);
  }
}

export default Home;