import React, { Component } from 'react';
import { connect } from "react-redux";
import { Dropdown, Grid} from 'semantic-ui-react';

import './DropDown.css'

class DropDown extends Component {
  constructor(props, context) {
    super(props);

    this.onAccountSelection = props.onAccountSelection;
  }

  handleChange = (event, obj) => {
    var value = (obj.value);

    this.setState({
      AccountIdx: value
    });
    this.onAccountSelection(value);
  }


  render(){
    return(
      <div>
          <Dropdown
            fluid
            selection
            placeholder='Choose an option'
            options={this.props.account_choices}
            onChange={this.handleChange}
            value={this.props.AccountIdx}
          />
      </div>
    );
  }
}

// reads from redux state and returns react props for the component
const mapStateToProps = (state, ownProps) => {
  return {
    AccountIdx: state.app.get('currentlySelectedAccountIdx'),
    size: state.app.get('accounts').size,
    account_choices: state.app.get('accounts').map((acc, index) => {
     return {
       key: index,
       text: 'Account '+ acc.getIn(['details', 'id']),
       value: index,
     }
    }).toArray()
  }
}

// allows the component to perform actions

const mapDispatchToProps = dispatch => {
  return {
    onAccountSelection: value => {
      dispatch({
        type: "ACCOUNT_SELECTION",
        AccountIdx: value
      })
    }

  }
}

const DropDownView= connect(mapStateToProps, mapDispatchToProps)(DropDown);

export default DropDownView;
