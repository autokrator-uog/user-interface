import React, { Component } from 'react';

import { Container, Header, Segment } from 'semantic-ui-react';

class TopContent extends Component {
  
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
