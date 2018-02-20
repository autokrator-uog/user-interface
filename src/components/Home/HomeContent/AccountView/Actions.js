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
        amount: null,
        open: false
    }
  }

  close = () => this.setState({ open: false })

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
    const {open} = this.state
    return (
      <div>
          <Menu vertical>
            <Menu.Item onClick={ () => this.setState({open: true}) }>Send Money</Menu.Item>

            <Modal
              open={open}
              size="tiny"
              onClose={this.close}
              closeIcon
            >

              <Modal.Header>Send money to another account</Modal.Header>
              <Modal.Content>

                  <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                      <label>Destination account ID:</label>
                      <Form.Input
                        type='number'
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

                    <Button type='submit'>Send</Button>
                  </Form>
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
