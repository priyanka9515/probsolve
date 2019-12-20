import React from "react";
import "./list.css";

import "./LawyerList";

export default class List extends React.Component {
  render() {
    return (
      //   <div>
      <div
        className="list"
        style={{ display: "flex", backgroundColor: " #14182e" }}
      >
        <img src={this.props.photo} />
        <div style={{ display: "column", marginLeft: "40px", color: "white" }}>
          <h5>Name:Mr.{this.props.name}</h5>
          <h5> Fee :{this.props.price}</h5>
          <h5>Experience : {this.props.year}yrs</h5>
          <h5>Mobile :{this.props.num}</h5>
          <h5>email :{this.props.email}</h5>
        </div>
      </div>
    );
  }
}
