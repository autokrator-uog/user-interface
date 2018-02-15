import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';


class Footer extends Component {
  render(){
    return(
      <Menu fixed='bottom' inverted as='footer'>
        <Container textAlign='center' >
            <Menu.Item as='a' href='#'>Site Map</Menu.Item>
            <Menu.Item as='a' href='#'>Contact us</Menu.Item>
            <Menu.Item as='a' href='#'>Terms and Conditions</Menu.Item>
            <Menu.Item as='a' href='#'>Privacy Policy</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Footer;
