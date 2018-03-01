import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import App from './App';
import { appReducers, initialState } from '../../reducers';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const history = createHistory();
  
  const store = createStore(
    combineReducers({
      router: routerReducer,
      app: appReducers
    }),
    { app: initialState, router: null },
    compose(
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history))
    )
  );
  
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
