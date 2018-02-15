import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Table, Header, Segment, Divider } from 'semantic-ui-react';

class AccountView extends Component {
  getStatement() {
    return this.props.account.get('statement')
  }
  
  getBalance() {
    return this.props.account.getIn(['details', 'balance'])
  }
  
  getAccountId() {
    return this.accountid = this.props.account.getIn(['details', 'id'])
  }

  renderStatementItems(){
    return this.getStatement().map((it) =>{
      var item = it.toObject();
      return(
          <Segment key={item.item} textAlign='left'>
              {item.note}
              
              <Header floated='right' as='h3' style={{ color: item.amount >= 0 ? 'green' : 'red' }}>
                  £{item.amount}
              </Header>
          </Segment>
      )
    })
  }

  render(){
    return(
      <div>
        <Container text style={{ marginTop: '2em', textAlign: 'center' }}>
          <Header as='h1'>Account: {this.getAccountId()}</Header>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h1'>Balance:</Header>
                </Table.Cell>
                <Table.Cell textAlign='right'>
                  <Header as='h1'>£{this.getBalance()}</Header>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          
          <div style={{textAlign: 'left'}}>
            <Header size='small'>Statement:</Header>
          </div>
          
          <Divider />
          
          <Container>
              {this.renderStatementItems()}
          </Container>
          
        </Container>
      </div>

    );
  }
}

// reads from redux state and returns react props for the component
const mapStateToProps = (state, ownProps) => {
  return {
    account: state.app.get('accounts').get(ownProps.accountIdx)
  }
}

// allows the component to perform actions
const mapDispatchToProps = dispatch => {
  return {

  }
}

const AccountViewConnected = connect(mapStateToProps, mapDispatchToProps)(AccountView);
export default AccountViewConnected;
