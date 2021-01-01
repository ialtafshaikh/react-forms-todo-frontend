import React, { Component } from "react";
import { signup } from "../endpoints";

export default class Signup extends Component {
  signup = (event) => {
    event.preventDefault();
    var formData = new FormData(event.target);

    var formObject = {};
    formData.forEach(function (value, key) {
      formObject[key] = value;
    });

    fetch(signup, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        console.log(this.props);
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  render() {
    return (
      <div className="form-container">
        <h1 className="form-title">User Registration Form</h1>

        <form
          action=""
          method="post"
          name="signup"
          encType="application/x-www-form-urlencoded"
          onSubmit={this.signup}
        >
          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            required
          />
          <br />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            required
          />
          <br />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <br />

          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />
          <br />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <br />

          <label htmlFor="confirmPassword">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />
          <br />
          <input type="submit" className="signupbtn" value="Sign Up" />
          <hr />
          <p>
            Already have an account?
            <a href="/login">Sign in</a>.
          </p>
        </form>
      </div>
    );
  }
}
