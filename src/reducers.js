import { fromJS } from 'immutable';

import { INIT_VALID_RESPONSE, INIT_INVALID_RESPONSE, INIT_USER_NOT_EXISTS } from './actions/init';
import { initSuccessReducer, initFailReducer } from './actions/init';

import { WEBSOCKET_INIT_SUCCESS, WEBSOCKET_MESSAGE_RECEIVED } from './actions/websocket';
import { websocketInitSuccessReducer, websocketMessageReceivedReducer } from './actions/websocket';


const initialState = fromJS({
    username: null,
    
    accounts: [],
    currentlySelectedAccountIdx: -1,
    
    websocketConnection: null,
    errors: []
});

function appReducers(state, action) {
  if (typeof state === 'undefined') {
    console.debug("Initializing state to initialState: ", initialState);
    return initialState
  }
  
  console.debug(`Processing action of type: ${action.type}`, action)
  
  switch (action.type) {
    case INIT_VALID_RESPONSE:
      return initSuccessReducer(state, action);
    case INIT_INVALID_RESPONSE:
      return initFailReducer(state, action);
    case INIT_USER_NOT_EXISTS:
      return state.set("username", null);
      
    
    case WEBSOCKET_INIT_SUCCESS:
      return websocketInitSuccessReducer(state, action);
    case WEBSOCKET_MESSAGE_RECEIVED:
      return websocketMessageReceivedReducer(state, action);
    
    
    default:
      console.info(`Received action of un-handled type ${action.type}. Ignoring...`, action);
      return state
  }
}

export default appReducers;
