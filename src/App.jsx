import React from "react";
import ReactDOM from "react-dom";
import StudentForm from "./StudentForm";

import "./index.css";

const App = () => (
  <div>
    <h1>Student App 1</h1>
    <StudentForm></StudentForm>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));