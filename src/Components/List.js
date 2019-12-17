import React from "react";
import "./list.css";

import "./LawyerList";

export default class List extends React.Component {
  render() {
    return (
      <div className="list">
        <h5>Name:Mr/Ms.{this.props.name}</h5>
        <h5> Fee :{this.props.price}</h5>
        <h5>experience : {this.props.year}yrs</h5>
        <h5>Mobile :{this.props.num}</h5>
        <h5>email :{this.props.email}</h5>
        <h5>image :{this.props.photo}</h5>
      </div>
    );
  }
}
