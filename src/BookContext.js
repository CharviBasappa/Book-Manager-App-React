import React, { createContext, useReducer } from "react";

export const BookContext = createContext();

const initialState = [];

function bookReducer(state, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

export const BookProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, initialState);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
