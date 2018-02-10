import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Table, Header, Segment } from 'semantic-ui-react';

class TopContent extends Component {
  constructor(props) {
    super(props);

  }

  render(){

    return(
      <div>
      <Container>
      <Segment clearing>
        <Header as='h3' floated='left'>
          Balance:
        </Header>

        <Header as='h3' floated='right'>
         $ {this.props.balance}
        </Header>

      </Segment>
      </Container>
      </div>

    );
  }
}

// TODO when a user has more than one account maybe create a
// dropdown menu to change the state to that ID

// reads from redux state and returns react props for the component
const mapStateToProps = state => {
  return {

  }
}

// allows the component to perform actions
const mapDispatchToProps = dispatch => {
  return {

  }
}

const TopContentView = connect(mapStateToProps, mapDispatchToProps)(TopContent);

export default TopContentView;
