import axios from 'axios';

import { BFAF_BASE_URL } from '../bfaf';

export const TRANSACTION_SUBMITTED = 'TRANSACTION_SUBMITTED';
export const TRANSACTION_ERROR = 'TRANSACTION_ERROR';


export function sendMoney(fromAccount, toAccount, amount) {
    return function(dispatch) {
      var url = `${window.location.protocol}//${BFAF_BASE_URL}/transaction/send`;
      console.log(`Sending POST request to ${url}`);

      var payload = {
          'from_account_id': parseInt(fromAccount,10),
          'to_account_id': parseInt(toAccount,10),
          'amount': amount
      }

      axios.post(url, payload)
        .then(function(response) {
            return dispatch({
                type: TRANSACTION_SUBMITTED,
                transaction_info: payload
            });
        })
        .catch(function(error) {
            return dispatch({
                type: TRANSACTION_ERROR,
                error: error
            });
        });
    }
}


// example of a thunk using the redux-thunk middleware
export function deposit(amount) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    return dispatch({
      type: 'DEPOSIT',
      timestamp: Date(),
      amount: Math.abs(amount)
    });
  };
}
export function withdraw(amount) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    return dispatch({
      type: 'WITHDRAW',
      timestamp: Date(),
      amount: Math.abs(amount)
    });
  };
}
