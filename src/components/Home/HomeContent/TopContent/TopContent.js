import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Table, Header, Segment } from 'semantic-ui-react';

class TopContent extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
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
          GET THE DAMN DATA
        </Header>
      </Segment>
      </Container>
      </div>

    );
  }
}

export default TopContent;
