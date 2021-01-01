import React, { Component } from "react";

export default class Signup extends Component {
  render() {
    return (
      <div className="form-container">
        <h1 className="form-title">User Registration Form</h1>

        <form
          action=""
          method="post"
          name="signup"
          enctype="application/x-www-form-urlencoded"
        >
          <label for="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            required
          />
          <br />

          <label for="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            required
          />
          <br />

          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <br />

          <label for="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />
          <br />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <br />

          <label for="confirmPassword">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />
          <br />
          <input type="submit" class="signupbtn" value="Sign Up" />
          <hr />
          <p>
            Already have an account?
            <a href="/blog-frontend/login.html">Sign in</a>.
          </p>
        </form>
      </div>
    );
  }
}
