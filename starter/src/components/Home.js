import { Link } from "react-router-dom";
import Shelfs from "./Shelfs";

export default function Home(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {/* component for shelf */}
          <Shelfs
            books={props.books}
            section="Currently Reading"
            category="currentlyReading"
            newBookShelf={props.newBookShelf}
          />
          ;{/* component for shelf */}
          <Shelfs
            books={props.books}
            section="Want To Read"
            category="wantToRead"
            newBookShelf={props.newBookShelf}
          />
          {/* component for shelf */}
          <Shelfs
            books={props.books}
            section="Read"
            category="read"
            newBookShelf={props.newBookShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
