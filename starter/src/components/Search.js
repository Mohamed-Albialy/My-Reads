import { useState } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";

export default function Search(props) {
  // create hook
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  // when write the name in the search appear the book containe the same letter else appear all the books
  const showingBooks =
    query === ""
      ? props.books
      : props.books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {showingBooks.map((book) => {
            return (
              <Books
                key={book.id}
                book={book}
                changeShelf={props.newBookShelf}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
