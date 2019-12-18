import React, { Component } from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Post extends Component {
  state = {};

  render() {
    const { title } = this.props;
    return (
      <div className="box">
        <div style={{ marginTop: "70px", fontSize: "20px", color: "white" }}>
          {title}
        </div>
        <Link to="/LawyerList">
          <Button
            style={{ backgroundColor: "white", color: "black", margin: "50px" }}
          >
            SHOW LAWYERS
          </Button>
        </Link>
      </div>
    );
  }
}

export default Post;
