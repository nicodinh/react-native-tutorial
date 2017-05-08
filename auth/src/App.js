import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import firebaseConfig from './config/firebase';

class App extends Component {
  componenentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    console.log(firebaseConfig);
    return (
      <View>
        <Header headerText='Authentication' />  
        <Text>An App !</Text>
      </View>
    );
  }

}

export default App;