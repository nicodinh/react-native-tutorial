'use strict';

import React                  from 'react';
import { Text }               from 'react-native';
import { AppRegistry, View }  from 'react-native';

import Header     from './src/components/Header';
import AlbumList  from './src/components/AlbumList';

// const App = () => {
//   return (
//     <Header headerText={'Albums'} />
//   );
// };

// same as

// const App = () => {
//   return  <Header headerText={'Albums'} />
// };

// same as

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View> 
);

AppRegistry.registerComponent('albums', () => App);