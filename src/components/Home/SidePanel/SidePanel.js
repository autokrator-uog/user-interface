import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Header, Divider} from 'semantic-ui-react';

import HomeHeader from "../HomeHeader/HomeHeader"
import Actions from '../HomeContent/AccountView/Actions';

class SidePanel extends Component {

  getAccountId() {
    return this.props.account.getIn(['details', 'id'])
  }

  render(){

    return(
      <div>

      <Container>
            <HomeHeader username={this.props.username}/>
            <Header as='h1'>Account: {this.getAccountId()}</Header>
            <Actions accountid={this.getAccountId()} />
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
