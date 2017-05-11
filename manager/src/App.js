import React, { Component } from 'react';
import { Text, View }       from 'react-native';
import { Provider }         from 'react-redux';
import { createStore }      from 'redux';
import firebase             from 'firebase';

import firebaseConfig from './config/firebase.json';
import reducers       from './reducers';
import LoginForm      from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;