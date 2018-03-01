import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, Button } from 'semantic-ui-react';

import { sendMoney } from '../../../../../actions/transactions';


class SendMoney extends Component {
  constructor(props) {
    super(props);

    this.state = {
        destinationId: "",
        amount: "",
    }
  }

  validateForm(){
    return this.state.amount > 0 && this.state.destinationId.length > 0 &&
    this.state.destinationId > 0;
  }

  getAccountId() {
      return this.props.accountid;
  }

  onSubmit = event => {
      event.preventDefault();

      this.props.sendTransaction(
          this.props.accountid, // from account ID
          this.state.destinationId, // to account ID
          this.state.amount // amount
      )

  }

  handleChangeDestinationId = event => {
      this.setState({
            destinationId: event.target.value,
          })
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
              <label>Destination account ID:</label>
              <Form.Input
                type='integer'
                placeholder='Account ID'
                icon='id badge'
                iconPosition='left'
                onChange={this.handleChangeDestinationId}
                value={this.state.destinationId} />
            </Form.Field>

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
      sendTransaction: (fromAccountId, toAccountId, amount) => {
          dispatch(sendMoney(fromAccountId, toAccountId, amount));
      }
  }
}

const SendMoneyConnected = connect(mapStateToProps, mapDispatchToProps)(SendMoney);
export default SendMoneyConnected;
