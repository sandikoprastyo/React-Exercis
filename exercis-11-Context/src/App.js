import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  React.useEffect = () => {
    fetch("https://netflix-unofficial.p.rapidapi.com/api/genres", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com",
        "x-rapidapi-key": "ca818f8495msh046248b961035a2p1890dcjsn742a8b623312",
      },
    })
      .then((response) => {
        console.log(JSON.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>exrecis-2</p>
      </header>
    </div>
  );
};

export default App;
