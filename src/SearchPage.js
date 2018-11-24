import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchPage extends Component {
  state = {
    query: ""
  };

  updateQuery(newQuery) {
    this.setState({
      query: newQuery
    });
  }

  showBooksOnQuery = query => {};

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={e => {
                this.updateQuery(e.target.value);
                this.showBooksOnQuery(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default SearchPage;
