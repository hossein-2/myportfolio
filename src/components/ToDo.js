import React, { Component } from "react";
import ToDoObject from "./ToDoObject";
import axios from "axios";
import CardContainer from "../styles/CardContainer";
import "../index.css";
import classnames from "classnames";

class ToDo extends Component {
  state = {
    todos: [],
    userId: "",
    loading: true,
    title: "",
    completed: "",
    errors: {}
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    this.setState({ todos: res.data, loading: false });
  }

  deleteSubject = id => {
    const { todos } = this.state;
    const filteredTodos = todos.filter(doe => doe.id !== id);
    this.setState({ todos: filteredTodos });
  };

  doneSubject = id => {
    const { todos } = this.state;
    const mappedTodos = todos.map(doe =>
      doe.id === id ? { ...doe, completed: !doe.completed } : doe
    );
    this.setState({ todos: mappedTodos });
  };

  unDoneSubject = id => {
    const { todos } = this.state;
    const mappedTodos = todos.map(doe =>
      doe.id === id ? { ...doe, completed: !doe.completed } : doe
    );
    this.setState({ todos: mappedTodos });
  };

  handleAddUser = e => {
    e.preventDefault();

    const { todos, title, completed } = this.state;
    if (title === "") {
      this.setState({ errors: { title: "Name is required" } });
      return;
    }
    const doe = { id: Math.random(), title, completed };
    const newTodos = [doe, ...todos];
    this.setState({ todos: newTodos });
    this.setState({ title: "" });
  };
  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleCheckboxChange = e => {
    this.setState({ completed: e.target.checked });
  };
  render() {
    const { todos, loading, errors, title, completed } = this.state;
    return (
      <React.Fragment>
        <CardContainer subject="Enter New Duty" border="border-dark" bg="">
          <form onSubmit={this.handleAddUser}>
            <div className="form-group ">
              <label htmlFor="subject">Subject</label>
              <input
                className={classnames("form-control form-control-sm  mb-1", {
                  "is-invalid": errors.title
                })}
                type="text"
                name="subject"
                placeholder="Enter The Subject"
                onChange={this.handleChange}
                error={errors.title}
                value={title}
              />
              {errors.title && (
                <div className="invalid-feedback mb-1">{errors.title}</div>
              )}
              <div className="form-group ">
                <label
                  style={{
                    cursor: "pointer"
                  }}
                >
                  {" "}
                  <input
                    type="checkbox"
                    name="checkbox"
                    checked={completed}
                    onChange={this.handleCheckboxChange}
                  />
                  <span style={{ marginLeft: 8 }}>completed</span>
                </label>
              </div>
              <input type="submit" className="btn  btn-dark" value="Add Duty" />
            </div>
          </form>
        </CardContainer>
        <CardContainer subject="To Do" border="border-danger" bg="bg-danger">
          {loading ? (
            <h1>loading... </h1>
          ) : (
            todos.map(doe => {
              const { id, completed } = doe;
              return (
                !doe.completed && (
                  <ToDoObject
                    doundo="fa-check"
                    color="fa-green"
                    key={doe.id}
                    doe={doe}
                    deleteCLickHandler={this.deleteSubject.bind(this, id)}
                    doneClickHandler={this.doneSubject.bind(this, id)}
                  />
                )
              );
            })
          )}
        </CardContainer>
        <CardContainer
          subject="Works Done"
          border="border-success"
          bg="bg-success"
        >
          {" "}
          {loading ? (
            <h1>loading... </h1>
          ) : (
            todos.map(doe => {
              const { id } = doe;
              return (
                doe.completed && (
                  <ToDoObject
                    color="fa-blue"
                    doundo="fa-undo"
                    key={doe.id}
                    doe={doe}
                    deleteCLickHandler={this.deleteSubject.bind(this, id)}
                    doneClickHandler={this.unDoneSubject.bind(this, id)}
                  />
                )
              );
            })
          )}
        </CardContainer>
      </React.Fragment>
    );
  }
}

export default ToDo;
