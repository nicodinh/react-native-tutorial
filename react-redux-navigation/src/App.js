import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import {
  createStore,
  applyMiddleware
}                           from 'redux';
import ReduxThunk           from 'redux-thunk';
import { StackNavigator }   from 'react-navigation';
import firebase             from 'firebase';

import reducers             from './reducers';
import firebaseConfig       from './config/firebase.json';
import Home                 from './components/Home';
import Registration         from './components/Registration';
import Login                from './components/Login';
import Dashboard            from './components/Dashboard';


const AppNavigator = StackNavigator({
  Home: { screen: Home },
  Registration: { screen: Registration },
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
}, {
    initialRouteName: 'Home',
});

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;