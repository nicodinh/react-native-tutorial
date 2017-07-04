import React, { Component } from 'react';
import { Text }             from 'react-native';
import { connect }          from 'react-redux';

import {
  Card,
  CardSection,
  Input,
  Button,
  Spinner
} from './common';
import {
  emailChanged,
  passwordChanged,
  loginUser
} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password, navigation } = this.props;
    console.log(this.props);
    this.props.loginUser({ email, password, navigation });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    console.log('LoginForm', this.props);

    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@domain.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}            
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  return { email, password, error, loading } = auth;
};

export default connect(mapStateToProps, { 
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);