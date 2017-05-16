import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import {
  createStore,
  applyMiddleware
}                           from 'redux';
import firebase             from 'firebase';
import ReduxThunk           from 'redux-thunk'; // it's a middleware for a Redux application

import firebaseConfig from './config/firebase.json';
import reducers       from './reducers';
import Router         from './Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;