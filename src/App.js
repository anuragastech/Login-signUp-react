import React, { Component } from 'react';
import Login from "./components/LoginSignup/login"
import SignUp from "./components/LoginSignup/signup"
import { BrowserRouter, Routes, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (

      <div className="App">
              <BrowserRouter>

      <Routes>
      <Route path='/signup' element={<SignUp/>} /> 

   <Login/>
   {/* <SignUp/> */}
      </Routes>

      </BrowserRouter>
      </div>


    );
  }
}

export default App;
