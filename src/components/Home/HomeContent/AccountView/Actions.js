import React, { Component } from 'react';
import { connect } from "react-redux";

import { Menu, Modal, Form, Button } from 'semantic-ui-react';

import { sendMoney } from '../../../../actions/transactions';


class Actions extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
    this.state = {
        destinationId: null,
        amount: 0,
        open: false
    }
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
      
      this.setState({ open: false })
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
          <Menu vertical>
            <Menu.Item onClick={ () => this.setState({open: true}) }>Send Money</Menu.Item>
            
            <Modal open={this.state.open} closeIcon>
              <Modal.Header>Send money to another account</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  
                  <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                      <label>Destination account ID:</label>
                      <Form.Input type='number' onChange={this.handleChangeDestinationId} value={this.state.destinationId} />
                    </Form.Field>
                    
                    <Form.Field>
                      <label>Amount:</label>
                      <Form.Input type='number' step={0.01} onChange={this.handleChangeAmount} value={this.state.amount} />
                    </Form.Field>
                    
                    <Button type='submit'>Send</Button>
                  </Form>
                  
                </Modal.Description>
              </Modal.Content>
            </Modal>
          
          </Menu>
      </div>
      
    );
  }
}


// reads from redux state and returns react props for the component
const mapStateToProps = state => {
  return {
    'asdf': 'asdf'
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

const ActionsConnected = connect(mapStateToProps, mapDispatchToProps)(Actions);
export default ActionsConnected;
