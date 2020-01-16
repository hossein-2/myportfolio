import React, { Component } from "react";

function ToDoObject(props) {
  return (
    <div className={`card ${props.border} mb-3`}>
      <div className={`card-header h5 ${props.bg} `}>{props.subject}</div>
      <div className="card-body text-dark">{props.children}</div>
    </div>
  );
}

export default ToDoObject;
