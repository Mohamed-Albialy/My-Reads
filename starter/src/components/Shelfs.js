import Books from "./Books";

export default function Shelfs(props) {
  // make filter to get book with category
  const categoryBooks = props.books.filter(
    (book) => book.shelf === props.category
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.section}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {categoryBooks.map((book) => {
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
