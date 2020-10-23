import React from "react";
import LoginAuth from "../login";
import Navbar from "../../components/Navbar";
import BookList from "../../components/Booklist";
import ThemeContextProvider from "../../contexts/ThemeContext";
import ThemeToggle from "../../components/ThemeToggle";
import AuthContext from "../../contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContext>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContext>
      </ThemeContextProvider>
      <LoginAuth />
    </div>
  );
}

export default App;
