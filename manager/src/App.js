import React, { Component } from 'react';
import { Text, View }       from 'react-native';
import { Provider }         from 'react-redux';
import { createStore }      from 'redux';
import firebase             from 'firebase';

import firebaseConfig from './config/firebase.json';
import reducers       from './reducers';

class App extends Component {
  // state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ loggedIn: true });
    //   } else {
    //     this.setState({ loggedIn: false });
    //   }
    // });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello !
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;