import React, { Component } from "react";
import "../index.css";

class ToDoObject extends Component {
  onDoneClick = () => {
    this.props.doneClickHandler();
  };
  onDeleteClick = () => {
    this.props.deleteCLickHandler();
  };
  render() {
    const { title, id, completed } = this.props.doe;
    return (
      <React.Fragment>
        <ul className="list-group mb-2">
          <li className="list-group-item">
            {title}
            <i
              className={`fas ${this.props.doundo} fa-lg ${this.props.color}`}
              style={{
                cursor: "pointer",
                float: "right"
              }}
              onClick={this.onDoneClick}
            />
            <i
              className="fas fa-times fa-lg"
              style={{
                cursor: "pointer",
                float: "right",
                color: "red",
                marginRight: "0.5rem"
              }}
              onClick={this.onDeleteClick}
            />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default ToDoObject;
