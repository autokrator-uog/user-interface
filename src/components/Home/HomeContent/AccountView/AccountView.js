import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Header, Segment} from 'semantic-ui-react';

import "./AccountView.css"

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
          <Segment key={item.item} textAlign='left'>

              <Header floated='right' as='h3' style={{ color: item.amount >= 0 ? 'green' : 'red', fontFamily: 'Roboto Mono, monospace'}}>
                  £ {item.amount}
              </Header>


            <div className='fixOverflow'>
              {item.note}
            </div>
          </Segment>
      )
    })
  }

  render(){
    return(
      <div>
        <div className='balanceView'>
            <Segment clearing raised>
                    <Header floated='left' as='h1' style={{ fontFamily: 'Roboto Mono, monospace' }}>Balance:</Header>
                    <Header floated='right' as='h1' style={{ fontFamily: 'Roboto Mono, monospace' }}> £ {this.getBalance()}</Header>
            </Segment>
        </div>

        <div className='statementView'>
            <Container>
                {this.renderStatementItems()}
            </Container>
        </div>

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
