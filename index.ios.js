'use strict';

import React            from 'react';
import { Text }         from 'react-native';
import { AppRegistry }  from 'react-native';

import Header from './src/components/header';

const App = () => {
  console.log('Started app');
  return (
    <Header />
  );
};

AppRegistry.registerComponent('albums', () => App);