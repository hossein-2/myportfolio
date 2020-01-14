import React, { Component } from "react";
import DoneWorks from "./DoneWorks";
import axios from "axios";

class ToDo extends Component {
  state = { todos: [], userId: "", loading: true, title: "", completed: "" };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    this.setState({ todos: res.data, loading: false });
  }

  handleRemoveUser = id => e => {
    const { todos } = this.state;
    const filteredTodos = todos.filter(doe => doe.id !== id);
    this.setState({ todos: filteredTodos });
  };

  render() {
    const { todos, id, loading, title, completed } = this.state;
    return (
      <div className="card border-danger mb-3">
        <div className="card-header h5 bg-danger ">ToDo List</div>
        <div className="card-body text-dark">
          {loading ? (
            <h1>loading... </h1>
          ) : (
            todos.map(doe => {
              const { id, title, completed } = doe;

              return (
                completed && (
                  <ul className="list-group mb-2">
                    <li className="list-group-item">
                      <b>Subject:</b> {title}
                      <i
                        className="fas fa-check fa-lg"
                        style={{
                          cursor: "pointer",
                          float: "right",
                          color: "green"
                        }}
                      />
                      <i
                        className="fas fa-times fa-lg"
                        style={{
                          cursor: "pointer",
                          float: "right",
                          color: "red",
                          marginRight: "0.5rem"
                        }}
                        onClick={this.handleRemoveUser(id)}
                      />
                    </li>
                  </ul>
                )
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default ToDo;
