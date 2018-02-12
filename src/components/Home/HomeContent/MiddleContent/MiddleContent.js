import React, { Component } from 'react';
import { Container, Table, Header } from 'semantic-ui-react';

class MiddleContent extends Component {


  createTableItems(){
    return this.props.statement.map((it) =>{
      var item = it.toObject();
      return(
        <Table.Row key={item.itemNo}>
        <Table.Cell> {item.amount} </Table.Cell>
        <Table.Cell> {item.note} </Table.Cell>
        </Table.Row>

      )
    })
  }


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
              <Table.HeaderCell>itemNo</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.createTableItems()}
            </Table.Body>
          </Table>
        </Container>
      </div>

    );
  }
}

export default MiddleContent;
