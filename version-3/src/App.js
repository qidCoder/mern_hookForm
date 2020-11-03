import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyForm from "./components/MyForm";
import React, { useState } from 'react';//need to import as we moved state variables here
import Display from "./components/Display";

function App() {
  //for lifting state version, moved these from MyForm.js and refactored
  //initialize input variables
  const [userform, setUserform] = useState({
    firstName: "",
    lastName: '',
    email: '',
    password: '',
    confirm_pw: ''
  });

  //adding in a submit form button
  const handleSubmit = e => {
    e.preventDefault();

    setUserform({
      firstName: "",
      lastName: '',
      email: '',
      password: '',
      confirm_pw: ''
    });
  }

  //we need a function to change the state variable
  const handleFormChange = (e) => {
    setUserform({
      ...userform,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="App">
      <MyForm
        inputs={userform}
        handleChange={handleFormChange}//need to pass in the function as a callback function
        handleSubmit={handleSubmit}
      />

      <Display inputs={userform} />
    </div>

  );
}

export default App;
