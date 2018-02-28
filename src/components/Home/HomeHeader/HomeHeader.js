import React, { Component } from 'react';
import { Header, Divider} from 'semantic-ui-react';

class HomeHeader extends Component {
  render(){

    return(
      <div>

          <Header as='h1'>Welcome back <b>{this.props.username}</b>!</Header>
          <Divider inverted section />

      </div>
    );
  }
}

export default HomeHeader;
