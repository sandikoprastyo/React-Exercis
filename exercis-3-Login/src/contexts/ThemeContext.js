import React, { createContext, Component } from "react";

//manggil create-react-context
export const ThemeContext = createContext({});

class ThemeContextProvider extends Component {
  //data state
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };

  //fungsi toggle button
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  //render
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContextProvider;
