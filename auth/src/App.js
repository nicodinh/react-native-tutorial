import React, { Component } from 'react';
import { View }       from 'react-native';
import firebase             from 'firebase';

import firebaseConfig from './config/firebase';
import { Header }     from './components/common';
import LoginForm      from './components/LoginForm';

class App extends Component {
  componenentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />  
        <LoginForm />
      </View>
    );
  }

}

export default App;