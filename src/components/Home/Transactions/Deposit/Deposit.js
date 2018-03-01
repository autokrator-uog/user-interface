import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, Button } from 'semantic-ui-react';

import { deposit } from '../../../../actions/transactions';


class Deposit extends Component {
  constructor(props) {
    super(props);

    this.state = {
        amount: null,
    }
  }

  validateForm(){
    return this.state.amount > 0;
  }

  //  TODO will the selection of currentIndex be handled in the actions ?
  getAccountId() {
      return this.props.accountid;
  }

  onSubmit = event => {
      event.preventDefault();

      this.props.sendTransaction(
          this.state.amount // amount
      )

  }

  handleChangeAmount = event => {
      this.setState({
            amount: parseFloat(event.target.value)
          })
  }

  render() {
    return (
      <div>
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Amount:</label>
              <Form.Input
                type='number'
                placeholder='Amount'
                icon='money'
                iconPosition='left'
                step={0.01}
                onChange={this.handleChangeAmount}
                value={this.state.amount} />
            </Form.Field>
            <Button primary style={{ fontFamily: 'Roboto Mono, monospace' }}  disabled ={!this.validateForm()} type='submit'>
              Send
            </Button>
          </Form>
      </div>

    );
  }
}


// reads from redux state and returns react props for the component
const mapStateToProps = state => {
  return {

  }
}

// allows the component to perform actions
const mapDispatchToProps = dispatch => {
  return {
      sendTransaction: (amount) => {
          dispatch(deposit(amount));
      }
  }
}

const DepositConnected = connect(mapStateToProps, mapDispatchToProps)(Deposit);
export default DepositConnected;
