import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Login.css";
import { initAccountData } from "../../actions/init";


class Login extends Component {
    constructor(props, context) {
      super(props);

      this.state = {
        username: props.username || "",
        password: props.password || ""
      };

      this.onUsernameInput = props.onUsernameInput;
      this.onPassowrdInput = props.onPassowrdInput;
      this.onLogin = props.onLogin;
    }

    validateForm() {
      return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleUsernameInput = event => {
      var username = event.target.value;

      this.setState({
        username: username
      });
      this.onUsernameInput(username);
    }

    handlePasswordInput = event => {
      var password = event.target.value;

      this.setState({
        password: password
      });
      this.onPassowrdInput(password);
    }

    handleSubmit = event => {
      event.preventDefault();
      
      this.onLogin(this.state.username);
      this.props.history.push('/user');
    }

    render() {
      return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            
            <FormGroup controlId="username" bsSize="large">
              <ControlLabel>Username</ControlLabel>
              <FormControl autoFocus type="username"
                value={this.state.username}
                onChange={this.handleUsernameInput}
              />
            </FormGroup>
            
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handlePasswordInput}
                type="password"
              />
          </FormGroup>
        
            <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
              Login
            </Button>
            
          </form>
        </div>
      );
    }
}

// reads from redux state and returns react props for the component
const mapStateToProps = state => {
  return {
    username: state.get('username'),
    password: state.get('password')
  }
}

// allows the component to perform actions
const mapDispatchToProps = dispatch => {
  return {
    onUsernameInput: username => {
      dispatch({
        type: "USERNAME_INPUT",
        username: username
      });
    },
    onPassowrdInput: password => {
      dispatch({
        type: "PASSWORD_INPUT",
        password: password
      });
    },
    onLogin: username => {
      dispatch(initAccountData(username));
    }
  }
}

const LoginView = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginView;
