import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((b, i) => (
              <Book updateBook={this.props.updateBook} key={i} book={b} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelf;
