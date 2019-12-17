import React, { Component } from "react";
import Post from "./Post";

let title = [
  "Divorce & family ",
  "Court marriage",
  "Real-Estate& Property ",
  "Civil lawyers",
  "Corporate & Industrial",
  "Consumer Protection ",
  "Cyber Lawyers",
  "Armed forces & Ttribunal"
];

class Body extends Component {
  render() {
    return (
      <div className="Container">
        {title.map((layer, i) => {
          return <Post title={layer} key={i} />;
        })}
      </div>
    );
  }
}

export default Body;
