import React, { Component } from 'react';
//import { Link } from 'react-router-dom'; ADD TO PACKAGES
import { Container, Image, Menu} from 'semantic-ui-react';

import Logo from "../../images/logo.png"

class Navbar extends Component {

  render(){

    return(
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
            <div class="image">
              <Image size='small' src={ Logo } style={{ marginRight: '0.5em' }}/>
            </div>
            </Menu.Item>
            <Menu.Item as='a'>Account Summary</Menu.Item>
            <Menu.Item as='a'>Payments and Transfers</Menu.Item>
            <Menu.Item as='a'>Account Details</Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
