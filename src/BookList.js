import React, { useContext } from "react";
import { BookContext } from "./BookContext";

const BookList = () => {
  const { books, dispatch } = useContext(BookContext);

  if (books.length === 0) return <p>No books yet 📭</p>;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author}
          <button
            onClick={() => dispatch({ type: "REMOVE_BOOK", payload: book.id })}
          >
            ❌ Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
