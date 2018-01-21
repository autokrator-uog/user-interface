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

/**
 * @param {object} sessionId - Object, sessionId used to retrieve account data for user.
 */
export function loadAccountData(sessionId) {
    // Would fetch data from backend by sessionId or a token and dispatch an
    // action to load account data for user.

    //loads from a json file ?
    const username = sessionIdUsernameMapping[sessionId.sessionId];
    const accountData = {
        accountData: accounts[username]
    };
    return {
        type: 'LOAD_ACCOUNT_DATA',
        accountData
    }
}
