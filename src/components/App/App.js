import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'


import HomeView from "../Home/Home"
import LoginView from "../Login/Login"

import { initAccountData } from '../../actions/init';
import { initWebsocketConnection } from '../../actions/websocket';

const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path='/' render={()=> <LoginView history={history} /> } />
          <Route path='/user' render={()=> <HomeView store={this.props.store} history={history} /> } />
        </div>
      </Router>
    );
  }
}

export default App;
