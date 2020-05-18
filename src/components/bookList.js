import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class booklist extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, dark, light } = context;
          const Theme = isLightTheme ? light : dark;
          return (
            <div
              className="book-list"
              style={{ color: Theme.syntax, background: Theme.bg }}
            >
              <ul>
                <li style={{ background: Theme.ui }}>The way of Kings</li>
                <li style={{ background: Theme.ui }}>The alchemist</li>
                <li style={{ background: Theme.ui }}>Immortals of meluva</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default booklist;
