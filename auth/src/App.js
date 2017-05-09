import React, { Component } from 'react';
import { View }             from 'react-native';
import firebase             from 'firebase';

import firebaseConfig                           from './config/firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm                                from './components/LoginForm';

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
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button>
              Log out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner size='large' />
          </CardSection>
        );
    }
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