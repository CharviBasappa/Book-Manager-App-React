import React, { useEffect, useRef } from "react";
import { BookProvider } from "./BookContext";
import BookForm from "./BookForm";
import BookList from "./BookList";

function App() {
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  return (
    <BookProvider>
      <div style={{ padding: "2rem" }}>
        <h2 ref={titleRef}>📚 My Book Manager</h2>
        <BookForm />
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;
