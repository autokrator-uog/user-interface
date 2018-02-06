import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor(props) {
      super(props);

      this.state = {
        username: "",
        password: ""
      };
    }

    validateForm() {
      return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }

    handleSubmit = event => {
      event.preventDefault();
    }

    render() {
      return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="username" bsSize="large">
              <ControlLabel>Username</ControlLabel>
              <FormControl autoFocus type="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Link to="user">
              <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
                Login
              </Button>
            </Link>
          </form>
        </div>
      );
    }

   componentDidMount() {
      // If user logged in, redirect to user
      }
}


export default Login;
