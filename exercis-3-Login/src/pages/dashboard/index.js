import React from "react";
import Navbar from "../../components/Navbar";
import BookList from "../../components/Booklist";
import ThemeContextProvider from "../../contexts/ThemeContext";
import ThemeToggle from "../../components/ThemeToggle";
//import AuthContext from "../../contexts/AuthContext";

function Dashboard() {
  return (
    <div className="App">
      <ThemeContextProvider>
        {/*<AuthContext>
        </AuthContext>*/}
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default Dashboard;
