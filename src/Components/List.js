import React from "react";
import "./list.css";
import faker from "faker";
import "./LawyersList";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"; 


export default class List extends React.Component {
  render() {
    return (
      <div className="list">
        <h5>Mr/Ms.{this.props.name}</h5>
        <h5> ₹:{this.props.price}</h5>
        <h5>
year : {this.props.year}
        </h5>
          <Button style={{ height: "40px",backgroundColor:"green", width: "300px" }}>Get Lawyer Details </Button> 
          
          </div>
    
    );
  }
}