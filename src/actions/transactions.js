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
