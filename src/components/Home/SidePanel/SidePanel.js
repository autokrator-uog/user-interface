import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { Container, Header, Segment, Button} from 'semantic-ui-react';

import Transactions from '../Transactions/Transactions';
import './SidePanel.css'

class SidePanel extends Component {

  getAccountId() {
    return this.props.account.getIn(['details', 'id'])
  }

  render(){

    return(
      <div className="sidePanel">

      <Container>
        <Segment clearing>
          <div className="account">
            <Header as='h2' style={{ fontFamily: 'Roboto Mono, monospace' }}>Account: {this.getAccountId()}</Header>

          </div>
          <Transactions account={this.props.account} />
          <div>
              <Link to='/'>
                <Button negative floated='right' style={{marginTop:'15em', fontFamily: 'Roboto Mono, monospace' }}> Logout </Button>
              </Link>
            </div>
        </Segment>
      </Container>
      </div>
    );
  }
}

// reads from redux state and returns react props for the component
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    account: state.app.get('accounts').get(ownProps.index)
  }
}

// allows the component to perform actions
const mapDispatchToProps = dispatch => {
  return {

  }
}

const SidePanelView= connect(mapStateToProps, mapDispatchToProps)(SidePanel);

export default SidePanelView;
