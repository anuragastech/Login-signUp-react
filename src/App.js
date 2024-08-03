import React, { Component } from 'react';
import Login from "./components/LoginSignup/login"
import SignUp from "./components/LoginSignup/signup"


class App extends Component {
  render() {
    return (
      <div className="App">
   <Login/>
   <SignUp/>
      </div>
    );
  }
}

export default App;
