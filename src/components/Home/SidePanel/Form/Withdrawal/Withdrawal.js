import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, Button } from 'semantic-ui-react';

import { withdraw } from '../../../../../actions/transactions';


class Withdrawal extends Component {
  constructor(props) {
    super(props);

    this.state = {
        amount: '',
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
          this.state.amount, // amount
          this.props.accountid //acount ID
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
      sendTransaction: (amount, accountid) => {
          dispatch(withdraw(amount,accountid));
      }
  }
}

const WithdrawalConnected = connect(mapStateToProps, mapDispatchToProps)(Withdrawal);
export default WithdrawalConnected;
