import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  setEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  submitForm = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.submitForm}>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            onChange={this.setEmail}
            value={this.state.email}
          />
          <br />
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            onChange={this.setPassword}
            value={this.state.password}
          />
          <br />
          <input type="submit" value="Login" />
          <input type="reset" value="Clear" />
        </form>
      </div>
    );
  }
}
