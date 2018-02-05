import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import appReducers from '../../reducers';

beforeEach(() => {
  console.debug = (...args) => {
      console.log.apply(this, args)
  }
})


it('renders without crashing', () => {
  const div = document.createElement('div');
  let store = createStore(appReducers, applyMiddleware(thunk));
  
  ReactDOM.render(
    <Provider store={store}>
      <App store={store} />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
