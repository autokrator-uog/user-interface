import axios from 'axios';

import { BFAF_BASE_URL } from '../bfaf';

export const INIT_VALID_RESPONSE = 'INIT_VALID_RESPONSE';
export const INIT_USER_NOT_EXISTS = 'INIT_USER_NOT_EXISTS';
export const INIT_INVALID_RESPONSE = 'INIT_INVALID_RESPONSE';

/**
 * @param {string} username - the username to fetch details for
 */
export function initAccountData(username) {
    return function(dispatch) {
      var url = `${window.location.protocol}//${BFAF_BASE_URL}/init?user_name=${username}`;
      console.debug(`Sending request to ${url}`);
      
      axios.get(url)
        .then(function(response) {
            switch(response.status) {
                case 200:
                    return dispatch({
                        type: INIT_VALID_RESPONSE,
                        accounts: response.data.accounts
                    });
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
            return dispatch({
                type: INIT_INVALID_RESPONSE,
                error: error
            });
        });
    }
}

export function initSuccessReducer(state, action) {
    return state.set("accounts", action.accounts).set("currentlySelectedAccountIdx", 0);
}

export function initFailReducer(state, action) {
    return state.update("errors", list => list.push(action.error));
}