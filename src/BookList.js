import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "./features/books/booksSlice";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  if (books.length === 0) return <p>No books added.</p>;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author}
          <button onClick={() => dispatch(removeBook(book.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
