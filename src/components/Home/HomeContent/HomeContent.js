import React, { Component } from "react";
import { connect } from "react-redux";

import AccountView from "./AccountView/AccountView";

class HomeContent extends Component {


  render() {
    return (
      <div>
          <AccountView accountIdx={this.props.currentlySelectedAccountIdx} />
      </div>
    )
  }
}

// reads from redux state and returns react props for the component
const mapStateToProps = state => {
  return {
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
