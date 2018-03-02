import axios from 'axios';

import { BFAF_BASE_URL } from '../bfaf';

export const TRANSACTION_SUBMITTED = 'TRANSACTION_SUBMITTED';
export const DEPOSIT_SUBMITTED = 'DEPOSIT_SUBMITTED';
export const WITHDRAW_SUBMITTED = 'WITHDRAW_SUBMITTED';

export const TRANSACTION_ERROR = 'TRANSACTION_ERROR';
export const DEPOSIT_ERROR = 'DEPOSIT_ERROR';
export const WITHDRAW_ERROR = 'WITHDRAW_ERROR';

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
export function deposit(amount, toAccount) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions

    var url = `${window.location.protocol}//${BFAF_BASE_URL}/accounts/deposit`;
    console.debug(`Sending POST request to ${url}`);

    var payload = {
        'amount': amount,
        'toAccount': toAccount
    }

    axios.post(url, payload)
      .then(function(response) {
        return dispatch({
        type: DEPOSIT_SUBMITTED,
        timestamp: Date(),
        deposit_info: payload
      })
      .catch(function(error) {
          return dispatch({
              type: DEPOSIT_ERROR,
              error: error
          });
      });
  };
}
export function withdraw(amount, fromAccount) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions

    var url = `${window.location.protocol}//${BFAF_BASE_URL}/accounts/withdraw`;
    console.debug(`Sending POST request to ${url}`);

    var payload = {
        'amount': amount,
        'fromAccount': fromAccount
    }
    axios.post(url, payload)
      .then(function(response) {
        return dispatch({
        type: WITHDRAW_SUBMITTED,
        timestamp: Date(),
        withdrawal_info: payload
      })
      .catch(function(error) {
          return dispatch({
              type: WITHDRAW_ERROR,
              error: error
          });
      });
  };
}
