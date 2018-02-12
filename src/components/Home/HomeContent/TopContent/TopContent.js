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

export default TopContent;
