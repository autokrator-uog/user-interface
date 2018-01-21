import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTransactions } from 'actions/transactions';
import TransactionsListEl from '../ListElement';

class TransactionsList extends Component {
   constructor() {
      super();

      this.state = { search: '' };
   }

   componentWillMount() {
      this.props.fetchTransactions();
   }

   render() {
     return(
       // Look into filtering and fetching of data
     );
   }

const mapStateToProps = (state) => {
   return {
      transactions: state.transactions.data,
      fetchTransactionsStatus: state.transactions.status
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchTransactions: () => dispatch(fetchTransactions())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(TransactionsList);
