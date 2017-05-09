import React, { Component } from 'react';
import { View }             from 'react-native';
import firebase             from 'firebase';

import firebaseConfig                   from './config/firebase';
import { Header, Button, CardSection }  from './components/common';
import LoginForm                        from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <CardSection>
          <Button>
            Log out
          </Button>
        </CardSection>
      );
    }

    return <LoginForm />
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />  
        {this.renderContent()}
      </View>
    );
  }

}

export default App;