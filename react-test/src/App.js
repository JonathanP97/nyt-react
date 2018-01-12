import React, { Component } from 'react';
import Home from "./components/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Switch>
        <div>
          {/*<Route exact path="/about" component={About}/>*/}
          <Route exact path="/" component={Home}/>
        </div>
       </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
