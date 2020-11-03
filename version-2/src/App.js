import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';//import hook
import Form from "./components/Form";
import Results from "./components/Results";

// this version has 2 components instead of one

function App() {
  //lets create the state here and then pass in the information that we need
  //destructure the useState function, //bring in and initialize useState and then set an initial value
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });


  return (
    <div className="App">
      {/* inputs, setInputs and data are arbitrary names */}
      {/* since the form will change the data but the results won't, we need to pass in additional data to the form */}
      <Form inputs = {state} setInputs = {setState}/>
      <Results data = {state}/>
    </div>
  );
}

export default App;
