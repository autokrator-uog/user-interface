import { fromJS } from 'immutable';

import { INIT_VALID_RESPONSE, INIT_INVALID_RESPONSE, INIT_USER_NOT_EXISTS } from './actions/init/init';
import { initSuccessReducer, initFailReducer, initUserNotFoundReducer } from './actions/init/init';

import { WEBSOCKET_MESSAGE_RECEIVED } from './actions/init/websocket';
import { websocketMessageReceivedReducer } from './actions/init/websocket';

import { TRANSACTION_SUBMITTED, TRANSACTION_ERROR } from './actions/transactions';


export const initialState = fromJS({
    username: "ToddSteele",
    password: "asd",

    accounts: [],
    currentlySelectedAccountIdx: 0,

    pendingTransactions: [],

    websocketConnection: null,
    errors: []
});

export function appReducers(state, action) {
  if (typeof state === 'undefined') {
    console.log("Initializing state to initialState: ", initialState);
    return initialState
  }

  console.log(`Processing action of type: ${action.type}`, action)

  switch (action.type) {
    case "USERNAME_INPUT":
      return state.set("username", action.username);
    case "PASSWORD_INPUT":
      return state.set("password", action.password);
    case "ACCOUNT_SELECTION":
      return state.set("currentlySelectedAccountIdx", action.AccountIdx);

    case INIT_VALID_RESPONSE:
      return initSuccessReducer(state, action);
    case INIT_INVALID_RESPONSE:
      return initFailReducer(state, action);
    case INIT_USER_NOT_EXISTS:
      return initUserNotFoundReducer(state, action);

    case WEBSOCKET_MESSAGE_RECEIVED:
      return websocketMessageReceivedReducer(state, action);

    case TRANSACTION_SUBMITTED:
      return state.update("pendingTransactions", list => list.push(action.transaction_info));
    case TRANSACTION_ERROR:
      return state.update("errors", list => list.push(action.error));

    default:
      console.info(`Received action of un-handled type ${action.type}. Ignoring...`, action);
      return state;
  }
}
