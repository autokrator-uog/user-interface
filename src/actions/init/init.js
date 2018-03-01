import axios from 'axios';
import { push } from 'react-router-redux';

import { List, fromJS } from 'immutable';

import { BFAF_BASE_URL } from '../../bfaf';
import { initWebsocketConnection } from './websocket';

export const INIT_VALID_RESPONSE = 'INIT_VALID_RESPONSE';
export const INIT_USER_NOT_EXISTS = 'INIT_USER_NOT_EXISTS';
export const INIT_INVALID_RESPONSE = 'INIT_INVALID_RESPONSE';


export function init(username) {
    return function(dispatch) {
      var url = `${window.location.protocol}//${BFAF_BASE_URL}/init?user_name=${username}`;
      console.log(`Sending request to ${url}`);

      axios.get(url)
        .then(function(response) {
            switch(response.status) {
                case 200:
                    // valid data... init the WebSocket
                    var accounts = response.data.accounts;
                    var account_ids = fromJS(accounts).map(account => account.getIn(['details', 'id']));
                
                    initWebsocketConnection(account_ids, dispatch, (websocket) => {
                        dispatch({
                            type: INIT_VALID_RESPONSE,
                            accounts: accounts,
                            websocketConnection: websocket
                        });
                        dispatch(push('/user')); // do navigation
                    });
                    return
                  
                case 404:
                    return dispatch({
                        type: INIT_USER_NOT_EXISTS
                    });
                default:
                    return dispatch({
                        type: INIT_INVALID_RESPONSE,
                        response: response
                    });
            }

        })
        .catch(function(error) {
            console.log(error);
            
            if (error.response.status === 404) {
                return dispatch({
                    type: INIT_USER_NOT_EXISTS,
                    username: username
                });
            }

            return dispatch({
                type: INIT_INVALID_RESPONSE,
                error: error
            });
        });
    }
}

export function initSuccessReducer(state, action) {
    var accounts = fromJS(action.accounts);
    
    accounts = accounts.map(account => {
        return account.update('statement', statement => {
            return statement.sortBy((statement_item) => statement_item.get('item')).reverse()
        })
    })
    
    return state
              .set("accounts", accounts)
              .set("errors", List())
              .set("websocketConnection", action.websocketConnection)
}

export function initUserNotFoundReducer(state, action) {
    return state
              .set("username", "")
              .set("password", "")
              .update("errors", list => list.push(`User ${action.username} does not exist!`))
              .set("accounts", List())
              .set("websocketConnection", null)
}

export function initFailReducer(state, action) {
    return state
              .update("errors", list => list.push(action.error))
              .set("accounts", List())
              .set("websocketConnection", null)
}
