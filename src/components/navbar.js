import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContent";

class navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => (
          <ThemeContext.Consumer>
            {themeContext => {
              const { isAunthincated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <div onClick={toggleAuth}>
                    {isAunthincated ? "Logged Out" : "Logged In"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About </li>
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
export default navbar;
