import React from "react";
import "./App.css";
// import Body from "./Components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
// import LawyersList from "./Components/LawyersList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Signin from "./Components/Navbar/Signin";
import Signup from "./Components/Navbar/Signup";
// import Loginup from "./Components/Navbar/Loginup";
import Main from "./Main.js";

function App() {
  return (
    <Router>
      {/* <Main /> */}
      <Route exact path="/" component={Main} />
      <Route path="/Navbar" component={Navbar} />
      <Route exact path="/Signin" component={Signin} />
      <Route exact path="/Signup" component={Signup} />
      {/* <Route exact path="/Loginup" component={Loginup} /> */}

      {/* <Route path="/List" component={Body} /> */}
      {/* <Route exact path="/LawyersList" component={LawyersList} /> */}
    </Router>
  );
}

export default App;
