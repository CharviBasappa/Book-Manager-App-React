import React from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>📚 Book Manager (Redux)</h2>
      <BookForm />
      <BookList />
    </div>
  );
};

export default App;
