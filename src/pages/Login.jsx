import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="form-container">
        <h1 className="form-title">User Login Form</h1>
        <p className="error">{this.props.error}</p>
        <form
          action=""
          method=""
          name="login"
          encType="application/x-www-form-urlencoded"
          onSubmit={this.props.login}
        >
          <label htmlFor="username">Username </label>
          <input
            type="text"
            name="username"
            onChange={this.props.setUsername}
            value={this.props.username}
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
          <input type="submit" className="loginbtn" value="Login" />
          <hr />
          <p>
            don't have an account?
            <a href="/signup">SignUp Here</a>.
          </p>
        </form>
      </div>
    );
  }
}
