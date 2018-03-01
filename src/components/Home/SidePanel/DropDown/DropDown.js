import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Segment, Dropdown, Grid} from 'semantic-ui-react';

import './DropDown.css'

class DropDown extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      AccountIdx: props.AccountIdx,
      size: props.size

    };

  }

  handleChange = event => {
    var value = event.target.value;

    this.setState({
      AccountIdx: value
    });
  }


  render(){

    const options = [
      { key: 0, text: 'Account Zero', value: 0 },
      { key: 1, text: 'Account One', value: 1 },
      { key: 2, text: 'Account Two', value: 2 },
      { key: 3, text: 'Account Three', value: 3 },
]


    return(
      <div>
      ACCOUNT SIZE IS {this.props.size}
      {this.props.accounts}
      <Grid columns={2}>
        <Grid.Column>
          <Dropdown
            options={options}
            placeholder='Choose an option'
            selection
            onChange={this.handleChange}
            value={this.state.AccountIdx}
          />
        </Grid.Column>
        <Grid.Column>
          <Segment secondary>
            <pre>Current Index: {this.state.AccountIdx}</pre>
          </Segment>
        </Grid.Column>
      </Grid>
      </div>
    );
  }
}

// reads from redux state and returns react props for the component
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    AccountIdx: state.app.get('currentlySelectedAccountIdx'),
    size: state.app.get('accounts').size,
  }
}

// allows the component to perform actions
const mapDispatchToProps = dispatch => {
  return {

  }
}

const DropDownView= connect(mapStateToProps, mapDispatchToProps)(DropDown);

export default DropDownView;
