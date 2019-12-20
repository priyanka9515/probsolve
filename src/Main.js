import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
class Main extends Component {
  render() {
    return (
    
        
      <div className="Main" style={{ fontSize: 60 }}>
        <div style ={{fontSize:80}}>PROBSOLVE</div>
        FIND YOUR BEST LAWYER
        <div style={{ marginTop: 100, fontSize: 40 }}> ARE YOU A?</div>
        <div className="Button">
          <Link to = "/UserForm">
          <Button
            style={{
              backgroundColor: "white",
              fontSize: 32,
              fontWeight: "bold",
              height: 70,
              marginTop: 30
            }}
          >
            Lawyer
          </Button>
          </Link>
          <Link to="/Signup">
            <Button
              style={{
                fontSize: 32,
                backgroundColor: "white",
                marginTop: 30,
                marginLeft: 200,
                fontWeight: "bold"
              }}
            >
              Client
            </Button>
          </Link>
        </div>
      </div>
      
    );
  }
}

export default Main;
