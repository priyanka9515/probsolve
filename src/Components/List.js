import React from "react";
import "./list.css";
// import faker from "faker";
import "./LawyersList";
import Button from "@material-ui/core/Button";
// import {Link} from "react-router-dom";

export default class List extends React.Component {
  render() {
    return (
      <div className="list">
        <h5>Mr/Ms.{this.props.name}</h5>
        <h5> ₹:{this.props.price}</h5>
        <h5>year : {this.props.year}</h5>
        <h5>Mobile :{this.props.num}</h5>
        <h5>email :{this.props.email}</h5>

        <Button
          style={{
            display: "flex",
            height: "40px",
            backgroundColor: "black",
            width: "250px",
            color: "white"
          }}
        >
          Show Lawyer Details
        </Button>
      </div>
    );
  }
}
