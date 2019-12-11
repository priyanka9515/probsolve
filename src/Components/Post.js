import React, { Component } from "react";
import "../App.css";
// import Button from "material-ui";
// import { Button } from "@material-ui/core/Button";
// import Button from "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
class Post extends Component {
  state = {};

  render() {
    const { title } = this.props;
    return (
      <div className="postcontainer">
        <div style={{ marginTop: "70px", fontSize: "20px" }}> {title}</div>
      </div>
    );
  }
}

export default Post;
