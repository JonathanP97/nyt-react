import React, { Component } from "react";
import "./Home.css";
import Article from "../../components/Article";

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
    
    if(this.state.start) url+= "&begin_date=" + this.state.start; 
    if(this.state.end) url+= "&end_date=" + this.state.end;
    console.log(url);
    fetch(url).then(result => result.json()).then(result => {
      console.log(result);
      this.setState({articles: result.response.docs})
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
      </div>
  	);
  }
}

export default Home;





// {this.state.books.length ? (
//   <List>
//     {this.state.books.map(book => {
//       return (
//         <ListItem key={book._id}>
//           <a href={"/books/" + book._id}>
//             <strong>
//               {book.title} by {book.author}
//             </strong>
//           </a>
//           <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//         </ListItem>
//       );
//     })}
//   </List>
// ) : (
//   <h3>No Results to Display</h3>
// )}