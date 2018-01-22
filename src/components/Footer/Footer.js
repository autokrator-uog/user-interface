import React, { Component } from 'react';
import { Container, Image, Segment, List, Divider} from 'semantic-ui-react';

import Logo from "../../images/logo.png"

class Footer extends Component {
  render(){
    return(
      <div>
        <div>
          <Segment inverted vertical style={{ margin: '5em 25em 5em', padding: '2em 0em', bottom: 0 }}>
            <Container textAlign='center'>
            <Image centered size='small' src={ Logo }/>
              <Divider inverted section />
              <List horizontal inverted divided link>
                <List.Item as='a' href='#'>Site Map</List.Item>
                <List.Item as='a' href='#'>Contact Us</List.Item>
                <List.Item as='a' href='#'>Terms and Conditions</List.Item>
                <List.Item as='a' href='#'>Privacy Policy</List.Item>
              </List>
            </Container>
          </Segment>
        </div>
      </div>

    );
  }
}

export default Footer;
