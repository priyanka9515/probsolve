import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Body from "./Components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import LawyersList from "./Components/LawyersList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Signin from "./Components/Navbar/Signin.js";
import Signup from "./Components/Navbar/Signup.js";

function App() {
  return (
    <Router>
      <Navbar />

      {/* <Route path="/List" component={Body} /> */}
      <Route exact path="/Signin" component={Signin} />
      <Route exact path="/Signup" component={Signup} />
      <Route path="/" component={Body} />

      {/* <Body /> */}
      <Route exact path="/LawyersList" component={LawyersList} />
    </Router>
  );
}

export default App;
