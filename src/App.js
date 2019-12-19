import React from "react";
import "./App.css";
import Body from "./Components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import LawyerList from "./Components/LawyerList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Signin from "./Components/Navbar/Signin";
import Signup from "./Components/Navbar/Signup";
// import Loginup from "./Components/Navbar/Loginup";
import Main from "./Main.js";
import UserForm from "./Components/UserForm";
// import Post from "./Components/Post";
// import Body from "./Components/Body";

function App() {
  return (
    <Router>
      {/* <Main /> */}
      <Route exact path="/" component={Main} />
      <Route path="/" component={Navbar} />
      <Route path="/Signin" component={Signin} />
      <Route path="/Signup" component={Signup} />
      <Route exact path="/Body" component={Body} />
      <Route exact path="/LawyerList" component={LawyerList} />
      <Route exact path="/UserForm" component={UserForm} />
    </Router>
  );
}

export default App;
