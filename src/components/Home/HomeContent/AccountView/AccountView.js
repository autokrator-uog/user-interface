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
    return this.props.account.getIn(['details', 'id'])
  }

  renderStatementItems(){
    return this.getStatement().map((it) =>{
      var item = it.toObject();
      return(
          <Segment vertical key={item.item} textAlign='left'>
              {item.note}

              <Header floated='right' as='h3' style={{ color: item.amount >= 0 ? 'green' : 'red', fontFamily: 'Roboto Mono, monospace'}}>
                  £ {item.amount}
              </Header>
          </Segment>
      )
    })
  }

  render(){
    return(
      <div>
          <Segment clearing inverted>
                  <Header floated='left' as='h1' style={{ fontFamily: 'Roboto Mono, monospace' }}>Balance:</Header>
                  <Header floated='right' as='h1' style={{ fontFamily: 'Roboto Mono, monospace' }}> £ {this.getBalance()}</Header>
          </Segment>


          <Container>
              {this.renderStatementItems()}
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
