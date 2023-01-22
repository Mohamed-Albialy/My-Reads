import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
  // create hooks
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [bookInventory, setBookInventory] = useState([]);

  // I use "useEfect" hook to fetch the books from api
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  // create function get two arguments to the book and the type shelf i want change and transfer the book to the shelf
  // main
  const newBookShelf = (book, newShelf) => {
    const newBookShelf = books.filter((myBook) => {
      if (myBook.id === book.id) {
        book.shelf = newShelf;
        return book;
      }
      return myBook;
    });
    setBooks(newBookShelf);
    BooksAPI.update(book, newShelf);
  };

  useEffect(() => {
    let abortFetch = false;

    const getBooks = async () => {
      if (query.length !== 0) {
        const res = await BooksAPI.search(query, 20);
        setBookInventory(res);
      }
      if (query.length === 0) {
        setBookInventory();
      }
    };

    if (!abortFetch) {
      getBooks();
    }

    return () => {
      abortFetch = true;
    };
  }, [query, bookInventory]);

  return (
    // use react routes to transfere easy between the pages
    <Routes>
      <Route
        path="/search"
        element={
          <Search books={books} query={query} newBookShelf={newBookShelf} />
        }
      />
      <Route
        path="/"
        element={
          <Home
            books={books}
            newBookShelf={newBookShelf}
            bookInventory={bookInventory}
          />
        }
      />
    </Routes>
  );
}

export default App;
