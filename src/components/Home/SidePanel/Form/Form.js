import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'

import  SendMoney  from "./SendMoney/SendMoney";
import Withdrawal from "./Withdrawal/Withdrawal";
import Deposit from "./Deposit/Deposit";

import "./Form.css"

class Transactions extends Component{



  getAccountId() {
    return this.props.account.getIn(['details', 'id'])
  }

  render(){

    const panes = [
      { menuItem: 'Transaction',  render: () => <Tab.Pane attached={false}><SendMoney accountid={this.getAccountId()}/></Tab.Pane>} ,
      { menuItem: 'Deposit', render: () => <Tab.Pane attached={false}><Deposit accountid={this.getAccountId()}/></Tab.Pane>},
      { menuItem: 'Withdrawal', render: () => <Tab.Pane attached={false}><Withdrawal accountid={this.getAccountId()}/></Tab.Pane>},

    ]

    return(
      <div>
         <Tab menu={{ secondary: true, pointing: true, borderless: true }} panes={panes} />
      </div>
    );

  }
}

export default Transactions;
