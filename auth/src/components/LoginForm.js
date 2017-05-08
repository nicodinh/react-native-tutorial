import React, { Component } from 'react';
import { TextInput }  from 'react-native';

import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  state = { text: '' };

  // this.setState({ text }) === this.setState({ text: text })
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{ height:20, width: 100 }}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>
            Login in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
