import React, { Component } from "react";

class Book extends Component {
  render() {
    let { title, authors, imageLinks, shelf } = this.props.book;
    let string;
    const { updateBook } = this.props;
    if (Array.isArray(authors)) authors = authors.join(" ");
    if (authors === (undefined || null || "")) authors = "Unknown";
    if (imageLinks === undefined) {
      string = "";
    } else {
      string = imageLinks.smallThumbnail;
    }

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${string})`
              }}
            />{" "}
            <div className="book-shelf-changer">
              <select
                value={shelf || "none"}
                onChange={e => {
                  updateBook(this.props.book, e.target.value);
                }}
              >
                <option value="move" disabled>
                  Move to...
                </option>{" "}
                <option value="currentlyReading"> Currently Reading </option>{" "}
                <option value="wantToRead"> Want to Read </option>{" "}
                <option value="read"> Read </option>{" "}
                <option value="none"> None </option>{" "}
              </select>{" "}
            </div>{" "}
          </div>{" "}
          <div className="book-title"> {title} </div>{" "}
          <div className="book-authors"> {authors} </div>{" "}
        </div>{" "}
      </li>
    );
  }
}

export default Book;
