import React from "react";
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basename="/myportfolio">
      <div className="App">
        <Header />
        <div className="container mt-3">
          <ToDo />
        </div>
      </div>
    </Router>
  );
}

export default App;
