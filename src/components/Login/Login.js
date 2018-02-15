import React, { Component } from "react";
import { connect } from "react-redux";
// import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import { Form, Button, Message } from "semantic-ui-react";

import "./Login.css";
import { init } from "../../actions/init/init";


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
    }
    
    renderErrors() {
        return this.props.errors.map((error, idx) => {
          return (
            <Message color='yellow' key={idx}>
              <p>{error}</p>
            </Message>
          )
        })
    }

    render() {
      return (
        <div className="Login">
          <Form onSubmit={this.handleSubmit}>
            
            {this.renderErrors()}

            <Form.Field>
              <label>Username</label>
              <Form.Input
                type="username"
                value={this.state.username}
                onChange={this.handleUsernameInput}
              />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <Form.Input
                value={this.state.password}
                onChange={this.handlePasswordInput}
                type="password"
              />
            </Form.Field>

            <Button disabled={!this.validateForm()} type="submit">
              Login
            </Button>
            
          </Form>
        </div>
      );
    }
}

// reads from redux state and returns react props for the component
const mapStateToProps = state => {
  console.log(state);
  return {
    username: state.app.get('username'),
    password: state.app.get('password'),
    errors: state.app.get('errors')
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
    onLogin: (username) => {
      dispatch(init(username));
    }
  }
}

const LoginView = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginView;
