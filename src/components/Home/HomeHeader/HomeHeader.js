import React, { Component } from 'react';
import { Container, Header, Divider} from 'semantic-ui-react';

class HomeHeader extends Component {
  render(){

    return(
      <div>
        <Container text>
          <Header as='h1'>Welcome back <b>{this.props.username}</b>!</Header>
          <Divider inverted section />
        </Container>
      </div>
    );
  }
}

export default HomeHeader;
