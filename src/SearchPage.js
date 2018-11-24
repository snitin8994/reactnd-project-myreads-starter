import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchPage extends Component {
  state = {
    query: "",
    books: [],
    searchBookResult: []
  };

  componentDidMount() {
    console.log("Searchpage compo called");
    BooksAPI.getAll().then(books => {
      console.log(books);
      this.setState({
        books
      });
    });
  }

  updateQuery(newQuery) {
    this.setState(
      {
        query: newQuery
      },
      this.showBooksOnQuery
    );
  }

  updateBookInfo = (book, shelf) => {
    BooksAPI.update(book, shelf).then(e => {
      book.shelf = shelf;
      this.setState(state => ({
        searchBookResult: state.searchBookResult
          .filter(b => {
            if (b.id !== book.id) return b;
          })
          .concat([book])
      }));
    });
  };

  showBooksOnQuery = () => {
    BooksAPI.search(this.state.query).then(resp => {
      if (!Array.isArray(resp)) {
        this.setState({
          searchBookResult: []
        });
      } else {
        resp.forEach(b => {
          let matchBooks = this.state.books.filter(book => {
            if (book.id === b.id) return book;
          });
          //check if matchBook has one matched element
          if (matchBooks[0]) {
            b.shelf = matchBooks[0].shelf;
          }
        });

        this.setState({
          searchBookResult: resp
        });
      }
    });
  };

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
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchBookResult.map((book, i) => (
              <Book updateBook={this.updateBookInfo} key={i} book={book} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
