import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

<<<<<<< Updated upstream
=======
import { List, Map } from "immutable";

>>>>>>> Stashed changes
import TopContent from "./TopContent/TopContent"
import MiddleContent from "./MiddleContent/MiddleContent"

class HomeContent extends Component {
<<<<<<< Updated upstream
  constructor(props) {
    super(props);

    this.state = {
      accounts: props.accounts
    };
  }
=======
>>>>>>> Stashed changes

  render() {
    console.log(this.state.accounts);

    return (
      <div>
<<<<<<< Updated upstream
        <TopContent accounts />
        {this.state.accounts}
        <MiddleContent />
=======
        <TopContent balance = {this.props.balance}/>
        <MiddleContent statement = {this.props.statement}/>
>>>>>>> Stashed changes
      </div>
    )

  }
}

// reads from redux state and returns react props for the component
const mapStateToProps = state => {
  var idx = state.get("currentlySelectedAccountIdx");
  var account = state.get('accounts').get(idx, Map());
  return {
<<<<<<< Updated upstream
    accounts: JSON.stringify(state.get('accounts'))
=======
    balance: account.getIn(["details",'balance'], "n/a"),
    statement: account.get('statement', List())
>>>>>>> Stashed changes
  }
}

// allows the component to perform actions
const mapDispatchToProps = dispatch => {
  return {

  }
}

const HomeContentView = connect(mapStateToProps, mapDispatchToProps)(HomeContent);

export default HomeContentView;
