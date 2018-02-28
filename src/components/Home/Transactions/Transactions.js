import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'

import  SendMoney  from "./SendMoney/SendMoney";
import Withdraw from "./Withdraw/Withdraw";
import Deposit from "./Deposit/Deposit";


class Transactions extends Component{



  getAccountId() {
    return this.props.account.getIn(['details', 'id'])
  }

  render(){

    const panes = [
      { menuItem: 'Deposit', render: () => <Tab.Pane attached={false}><Deposit accountid={this.getAccountId()}/></Tab.Pane>},
      { menuItem: 'Withdrawal', render: () => <Tab.Pane attached={false}><Withdraw accountid={this.getAccountId()}/></Tab.Pane>},
      { menuItem: 'Send',  render: () => <Tab.Pane attached={false}><SendMoney accountid={this.getAccountId()}/></Tab.Pane>} ,

    ]

    return(
      <div>
         <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    );

  }
}

export default Transactions;
