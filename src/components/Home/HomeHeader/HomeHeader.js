import React, { Component } from 'react';
import { Container, Header, Divider} from 'semantic-ui-react';

class HomeHeader extends Component {
  render(){

    return(
      <div>

        <Container text style={{ marginTop: '7em', textAlign: 'center' }}>
          <Header as='h1'>Account Summary</Header>
          <p>Customer number:  ******0013</p>
          <p>Last login:  10 P.M. Sunday 21 January 2018 (UK time)</p>
          <Divider inverted section />
        </Container>

      </div>

    );
  }
}

export default HomeHeader;
