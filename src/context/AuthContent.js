import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthincated: false
  };

  toggleAuth = () => {
    this.setState({ isAuthincated: !this.state.isAuthincated });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default AuthContextProvider;
