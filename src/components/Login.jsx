import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form
          action=""
          method=""
          name="login"
          encType="application/x-www-form-urlencoded"
          onSubmit={this.props.login}
        >
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            onChange={this.props.setEmail}
            value={this.props.email}
          />
          <br />
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            onChange={this.props.setPassword}
            value={this.props.password}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
