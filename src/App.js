import React from "react";
import "./App.css";
// import { Button } from "material/ui-core/Button";
import Button from "@material-ui/core/Button";
function App() {
  return (
    <div className="App">
      <div className="App-header" style={{ fontSize: 80 }}>
        FIND YOUR BEST LAWYER
        <div style={{ marginTop: 100, fontSize: 40 }}> ARE YOU A?</div>
        <div style={{ display: "flex", marginTop: 100 }}>
          <Button
            style={{
              fontSize: 32,
              backgroundColor: "white",
              // display: "flex",
              fontWeight: "bold"
            }}
          >
            Lawyer
          </Button>
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
        </div>
      </div>
    </div>
  );
}

export default App;
