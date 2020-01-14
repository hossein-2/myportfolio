import React from "react";
import Header from "./components/Header";
import SubjectDescription from "./components/SubjectDescription";
import ToDo from "./components/ToDo";
import DoneWorks from "./components/DoneWorks";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-3">
        <SubjectDescription />
        <ToDo />
        <DoneWorks />
      </div>
    </div>
  );
}

export default App;
