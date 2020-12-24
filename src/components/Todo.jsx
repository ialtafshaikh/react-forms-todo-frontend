import React, { Component } from "react";
import Login from "./Login";
import TodoList from "./TodoList";
import { endpoint, login } from "../endpoints";
import Cookies from "js-cookie";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      taskName: "",
      taskList: [],
      isLoggedIn: false,
      email: "",
      password: "",
      cookie: "",
    };
  }
  loadTodos = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + Cookies.get("jwt"));
    console.log(Cookies.get("jwt"));
    fetch(endpoint, { headers: myHeaders, mode: "cors" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Please Login to continue");
      })
      .then(({ todos, currentUser }) => {
        console.log(todos);
        this.setState({ taskList: todos });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  setEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };
  login = (event) => {
    event.preventDefault();
    console.log("singing ining");
    var formData = new FormData(event.target);

    var formObject = {};
    formData.forEach(function (value, key) {
      formObject[key] = value;
    });

    fetch(login, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        //   console.log("jwt=" + data.data[0]["jwt"]);
        Cookies.set("jwt", data.data[0]["jwt"]);
        this.setState({ isLoggedIn: true });
        this.loadTodos();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div>
            <form action="">
              <input type="text" name="taskName" />
              <input type="submit" value="add task" />
            </form>
            <h2>Tasks List</h2>
            <TodoList taskList={this.state.taskList} />
          </div>
        ) : (
          <Login
            login={this.login}
            setEmail={this.setEmail}
            email={this.state.email}
            password={this.state.password}
            setPassword={this.setPassword}
          />
        )}
      </div>
    );
  }
}
