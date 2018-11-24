import React, { Component } from "react";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";

class MainPage extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }

  render() {
    return (
      <div class="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf />
              <BookShelf />
              <BookShelf />
            </div>
          </div>
          <div className="open-search">
            <button>Add a book</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
