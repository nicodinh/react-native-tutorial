import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import {
  createStore,
  applyMiddleware
}                           from 'redux';
import ReduxThunk           from 'redux-thunk';
import { StackNavigator }   from 'react-navigation';

import reducers               from './reducers';
import Home                   from './components/Home';
import Registration           from './components/Registration';
import Login                  from './components/Login';

const AppNavigator = StackNavigator({
  Home: { screen: Home },
  Registration: { screen: Registration },
  Login: { screen: Login },
});

class App extends Component {
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