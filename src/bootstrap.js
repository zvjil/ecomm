import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {Router, Switch, Route} from 'react-router-dom';
import Layout from './components/layout';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import reducers from './reducers';
import Account from './components/account/account';

const createStoreWithMiddleware = applyMiddleware () (
  compose (
    (window.devToolsExtension ? window.devToolsExtension () : f => f) (
      createStore
    )
  )
);

import './style/main.scss';
import history from './history';

function main () {
  ReactDOM.render (
    <Provider store={createStoreWithMiddleware (reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />

            <Route path="/account" exact component={Account} />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector ('.app-wrapper')
  );
}

document.addEventListener ('DOMContentLoaded', main);
