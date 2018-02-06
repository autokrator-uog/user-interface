import WebSocket from 'ws';

import { BFAF_BASE_URL } from '../bfaf';

export const WEBSOCKET_INIT_SUCCESS = 'WEBSOCKET_INIT_SUCCESS';
export const WEBSOCKET_MESSAGE_RECEIVED = 'WEBSOCKET_MESSAGE_RECEIVED';


export function initWebsocketConnection(accountIds, store) {
    var url = `ws://${BFAF_BASE_URL}/updates`;
    console.debug(`Opening websocket connection on ${url}`);
    
    var socket = new WebSocket(url);
    
    socket.onopen = () => {
        socket.send(JSON.stringify({
            account_ids: accountIds
        }));
    }
    
    socket.onmessage = wsMessage => {
        console.debug("Received wsMessage: ", wsMessage);
        
        store.dispatch(messageReceived(wsMessage));
    }
    
    return {
        type: WEBSOCKET_INIT_SUCCESS,
        socket: socket
    }
}

function messageReceived(wsMessage) {
    var message = JSON.parse(wsMessage);
    return {
        type: WEBSOCKET_MESSAGE_RECEIVED,
        message: message
    }
}

export function websocketInitSuccessReducer(state, action) {
    return state.set("websocketConnection", action.socket)
}

export function websocketMessageReceivedReducer(state, action) {
    return state
}