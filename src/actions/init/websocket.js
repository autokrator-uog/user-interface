import { BFAF_BASE_URL } from '../../bfaf';

import { fromJS } from 'immutable';

export const WEBSOCKET_INIT_SUCCESS = 'WEBSOCKET_INIT_SUCCESS';
export const WEBSOCKET_MESSAGE_RECEIVED = 'WEBSOCKET_MESSAGE_RECEIVED';


export function initWebsocketConnection(accountIds, dispatch, callback) {
    var url = `ws://${BFAF_BASE_URL}/updates`;
    console.log(`Opening websocket connection on ${url}`);
    
    var socket = new WebSocket(url);
    
    socket.onopen = () => {
        socket.send(JSON.stringify({
            account_ids: accountIds
        }));
    }
    
    socket.onmessage = wsMessage => {
        console.log("Received wsMessage: ", wsMessage);
        
        dispatch(messageReceived(wsMessage));
    }
    
    callback(socket);
}

function messageReceived(wsMessage) {
    var message = JSON.parse(wsMessage.data);
    return {
        type: WEBSOCKET_MESSAGE_RECEIVED,
        message: message
    }
}

export function websocketMessageReceivedReducer(state, action) {
    switch(action.message.update_type) {
        case "new_statement_item":
            console.log("Processing new_statement_item ", action.message);
            
            var accountIdx = state.get('accounts').findIndex(
                (value, index, iter) => value.getIn(['details', 'id']) === action.message.for_account_id
            );
            
            return state
                      .updateIn(['accounts', accountIdx, 'statement'], statement => {
                          return statement.insert(0, fromJS(action.message.data));
                      })
                      .updateIn(['accounts', accountIdx, 'details', 'balance'], balance => balance + action.message.data.amount);
            
        default:
            console.log(`UNABLE TO HANDLE MESSAGE TYPE: ${action.message.update_type}`)
            return state;
    }
}
