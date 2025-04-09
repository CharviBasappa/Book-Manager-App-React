# 📚 Book Manager App (React + Redux Toolkit)

This is a simple and lightweight Book Manager app built using React and Redux Toolkit. It demonstrates modern state management with functional components and hooks. Users can add and remove books, with all state managed globally through Redux.

---

## 🛠️ Tech Stack

- **React** (Functional Components + Hooks)
- **Redux Toolkit** (`@reduxjs/toolkit`, `react-redux`)
- **useSelector** and **useDispatch** for interacting with the store

---

## 🚀 Features

- Add new books with title and author
- Remove books from the list
- Global state management using Redux Toolkit
- Component-based architecture

---

## 📂 Folder Structure

```plaintext
src/
├── app/
│   └── store.js               # Redux store setup
├── features/
│   └── books/
│       └── booksSlice.js      # Redux slice for books
├── BookForm.js                # Add book form
├── BookList.js                # List of all books with remove functionality
├── App.js                     # Main component
├── index.js                   # Entry point with <Provider>
```

---

## 📸 Screenshots

### 🖥️ App Overview
![Overview](./screenshots/Intro.png)

### ➕ Add a Book
![Add Book](./screenshots/AddBooks.png)

### ❌ Delete a Book
![Remove Book](./screenshots/DeleteBook.png)

---

## 🛠️ Getting Started

Follow these steps to run the project locally:

### ✅ 1. Clone the Repository:-
```
git clone https://github.com/your-username/book-manager-app.git
cd book-manager-app
```

### ✅ 2. Install Dependencies
```
npm install @reduxjs/toolkit react-redux
```

### ✅ 3. Run the App
```
npm start
```
#### Open http://localhost:3000 to view the app.

