import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";

class App extends React.Component {
  state = {
    books: []
  };

  render() {
    return (
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchPage} />
      </div>
    );
  }
}

export default App;
