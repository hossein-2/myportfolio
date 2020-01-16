import React from "react";
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-3">
        <ToDo />
      </div>
    </div>
  );
}

export default App;
