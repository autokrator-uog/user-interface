import React, { Component } from 'react';
import { Container, Table, Header } from 'semantic-ui-react';

class HomeContent extends Component {
  render(){

    return(
      <div>
        <Container text style={{ marginTop: '2em', textAlign: 'center' }}>
          <Header as='h1'>Transactions</Header>

        </Container>

        <Container style={{ marginTop: '2em'}}>
          <Table celled fixed singleLine>
            <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            <Table.Row>
              <Table.Cell>John</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell
                title={[
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                  'et dolore magna aliqua.',
                ].join(' ')}
              >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jamie</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell>Shorter description</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill</Table.Cell>
              <Table.Cell>Denied</Table.Cell>
              <Table.Cell>Shorter description</Table.Cell>
            </Table.Row>
            </Table.Body>
          </Table>
        </Container>
      </div>

    );
  }
}

export default HomeContent;
