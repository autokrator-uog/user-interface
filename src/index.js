import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App/App';
import appReducers from './reducers';

import './index.css';

const store = createStore(
  appReducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('app')
);


// why t f do we need this. Srsly?
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
