import React, { Component } from 'react';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '' };

  // this.setState({ text }) === this.setState({ text: text })
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='your@email.com'
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
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
