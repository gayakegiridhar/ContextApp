import React from "react";
import "./styles.css";
import Navbar from "./components/navbar";
import BookList from "./components/bookList";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./context/AuthContent";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}
export default App;
