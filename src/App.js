import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Body from "./Components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import LawyersList from "./Components/LawyersList";
import {BrowserRouter as Router, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <Router>
    <Route exact path ="/" component={Body} />
    <Route path ="/LawyersList" component={LawyersList}/>
      
    </Router>
  );
}

export default App;

