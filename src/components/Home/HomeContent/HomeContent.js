import React, { Component } from "react";
import { connect } from "react-redux";

import AccountView from "./AccountView/AccountView";

class HomeContent extends Component {
  renderAccountView() {
      return (
          <AccountView accountIdx={this.props.currentlySelectedAccountIdx} />
      )
  }
  
  render() {
    return (
      <div>
          {this.renderAccountView()}
      </div>
    )
  }
}

// reads from redux state and returns react props for the component
const mapStateToProps = state => {
  return {
    accounts: state.app.get('accounts'),
    currentlySelectedAccountIdx: state.app.get('currentlySelectedAccountIdx')
  }
}

// allows the component to perform actions
const mapDispatchToProps = dispatch => {
  return {

  }
}

const HomeContentView = connect(mapStateToProps, mapDispatchToProps)(HomeContent);

export default HomeContentView;
