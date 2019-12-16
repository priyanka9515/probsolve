import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
class Main extends Component {
  render() {
    return (
      <div className="Main" style={{ fontSize: 80 }}>
        FIND YOUR BEST LAWYER
        <div style={{ marginTop: 100, fontSize: 40 }}> ARE YOU A?</div>
        <div style={{ display: "flex", marginTop: 100 }}>
          <Button
            style={{
              fontSize: 32,
              backgroundColor: "white",
              // display: "flex"
              marginTop: 10,
              marginLeft: 200,
              fontWeight: "bold"
            }}
          >
            Lawyer
          </Button>

          <Link to="/Navbar">
            <Button
              style={{
                fontSize: 32,
                backgroundColor: "white",
                // display: "flex"
                marginTop: 10,
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
