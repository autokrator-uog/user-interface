import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Menu} from 'semantic-ui-react';

import Logo from "../../../images/logo.png"

class Navbar extends Component {

  render(){

    return(
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Link to='/'>
                <div>
                  <Image size='small' src={ Logo } style={{ marginRight: '0.5em' }}/>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item as='div'>
              <Link to='/user'>My Accounts</Link>
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
