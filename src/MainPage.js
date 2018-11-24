import React, { Component } from "react";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

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

  //this method updates the BookAPI as
  //well as current state
  //@param book object, new shelf value
  updateBookInfo = (book, shelf) => {
    BooksAPI.update(book, shelf).then(e => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books
          .filter(b => {
            if (b.id !== book.id) return b;
          })
          .concat([book])
      }));
    });
  };

  render() {
    const { books } = this.state;
    let currentlyReadingBooks = books.filter(book => {
      if (book.shelf === "currentlyReading") return book;
    });
    let wantToReadBooks = books.filter(book => {
      if (book.shelf === "wantToRead") return book;
    });
    let readBooks = books.filter(book => {
      if (book.shelf === "read") return book;
    });

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf
                updateBook={this.updateBookInfo}
                name="Currently Reading"
                books={currentlyReadingBooks}
              />
              <BookShelf
                updateBook={this.updateBookInfo}
                name="Want to Read"
                books={wantToReadBooks}
              />
              <BookShelf
                updateBook={this.updateBookInfo}
                name="Read"
                books={readBooks}
              />
            </div>
          </div>
          <Link to="/search" className="open-search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
