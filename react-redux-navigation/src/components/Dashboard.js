import React, { Component }                 from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  ToastAndroid,
  Platform
} from 'react-native';
import { TabNavigator }                     from 'react-navigation';
import { Constants, KeepAwake }             from 'expo';
import { Button, Grid, Row, Divider, Tile } from 'react-native-elements';

import Home                   from './Home';
// https://github.com/react-community/react-navigation/blob/master/examples/NavigationPlayground/js/SimpleTabs.js
const SimpleTabs = TabNavigator(
  {
    Home: {
      screen: Home,
      path: '',
    },
    People: {
      screen: Home,
      path: 'cart',
    },
    Chat: {
      screen: Home,
      path: 'chat',
    },
    Settings: {
      screen: Home,
      path: 'settings',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
      backgroundColor: '#3abdee'
    },
  }
);

class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
    headerStyle: {
      paddingTop: Constants.statusBarHeight,
      height: 60 + Constants.statusBarHeight,
      backgroundColor: '#3abdee'
    },
    headerTitleStyle: {
      color: '#fff'
    },
    headerLeft: null
  };
  
  handleBackPress = () => {
    ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SimpleTabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomContainerStyle: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: '#3abdee',
  },
  topContainerStyle: {
    flex: 1,
    backgroundColor: '#3abdee',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Dashboard;