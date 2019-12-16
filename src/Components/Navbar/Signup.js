import React from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
class Users extends React.Component {
  render() {
    return (
      <div
        className="body"
        style={{
          height: "100px",
          width: "300px",
          marginLeft: "500px",
          marginTop: "40px"
        }}
      >
        <Form className="signin">
          <FormGroup bsSize="large">
            <Label>Email</Label>
            <Input type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup bsSize="large">
            <Label>Mobile number</Label>

            <Input type="mobilenumber" placeholder="mobilenumber" />
          </FormGroup>
          <FormGroup>
            <Label>password</Label>
            <Input type="password" placeholder="password" />
          </FormGroup>
          <Button className="btn-lg btn-dark btn-block">Login</Button>
        </Form>
      </div>
    );
  }
}

export default Users;
