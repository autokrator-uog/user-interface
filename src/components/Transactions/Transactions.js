import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TransactionsList from './TransactionsList/TransactionsList';


const Transactions = (props) => {
   return (
      <div className="row">
         <div className="col-xs-12">
            <Switch>
               //<Route exact path="/panel/transactions" component={TransactionsList} />
            </Switch>
         </div>
      </div>
   );
}

export default Transactions;
