import React, { Component }                 from 'react';
import { StyleSheet, Text, View }           from 'react-native';
// import { StackNavigator }                   from 'react-navigation';
import { Constants, KeepAwake }             from 'expo';
import { Button, Grid, Row, Divider, Tile } from 'react-native-elements';

class Registration extends Component {
  static navigationOptions = {
    title: 'Registration',
    headerStyle: {
      paddingTop: Constants.statusBarHeight,
      height: 60 + Constants.statusBarHeight,
      backgroundColor: '#3abdee'
    },
    headerTitleStyle: {
      color: '#fff'
    }
  };
  
  render() {
    return (
      <Grid>
        <KeepAwake />
        <Row size={3}>
          <View style={styles.topContainerStyle}>
            <Text>Registration</Text>
          </View>
        </Row>
        <Row size={1}>
          <View style={styles.bottomContainerStyle}>
            <Text>Registration</Text>
          </View>
        </Row>
      </Grid>
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

export default Registration;