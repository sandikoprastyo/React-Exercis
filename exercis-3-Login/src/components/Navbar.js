import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <AuthContext.Consumer>
        {(AuthContext) => (
          <ThemeContext.Consumer>
            {(ThemeContext) => {
              const { isAuth, toggleAuth } = AuthContext;
              const { isLightTheme, light, dark } = ThemeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <div onClick={toggleAuth}>
                    {isAuth ? "Logged in" : "Logged out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
