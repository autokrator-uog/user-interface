import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";


class Login extends Component {
    constructor(props) {
      super(props);

      this.state = {
        username: props.username || "",
        password: props.password || ""
      };

      this.onUsernameInput = props.onUsernameInput;
      this.onPassowrdInput = props.onPassowrdInput;
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
<<<<<<< Updated upstream
=======

      this.onLogin(this.state.username);
      this.props.history.push('/user');
>>>>>>> Stashed changes
    }

    render() {
      return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
            <FormGroup controlId="username" bsSize="large">
              <ControlLabel>Username</ControlLabel>
              <FormControl autoFocus type="username"
                value={this.state.username}
                onChange={this.handleUsernameInput}
              />
            </FormGroup>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handlePasswordInput}
                type="password"
              />
<<<<<<< Updated upstream
            </FormGroup>
            <Link to="user">
              <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
                Login
              </Button>
            </Link>
=======
          </FormGroup>

            <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
              Login
            </Button>

>>>>>>> Stashed changes
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
    }
  }
}

const LoginView = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginView;
