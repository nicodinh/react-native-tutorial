import React, { Component }                 from 'react';
import { StyleSheet, Text, View }           from 'react-native';
// import { StackNavigator }                   from 'react-navigation';
import { Constants, KeepAwake }             from 'expo';
import { Button, Grid, Row, Divider, Tile } from 'react-native-elements';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
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
             <Tile
              featured
              imageSrc={require('../../assets/images/bg.jpg')}
              title='Coucou'
              titleStyle={styles.tileTitleStyle}
              caption='Coucou!'
              activeOpacity={1}
            />
          </View>
        </Row>
        <Row size={1}>
          <View style={styles.bottomContainerStyle}>
            <Button
              raised
              title='Registration'
              buttonStyle={styles.registrationButtonStyle}
              onPress={() => this.props.navigation.navigate('Registration')}
            />
            <Divider style={styles.dividerStyle} />
              <Button
                title='Login'
                buttonStyle={styles.loginButtonStyle}
                onPress={() => this.props.navigation.navigate('Login')}
              />
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
  },
  dividerStyle: {
    backgroundColor: '#3abdee'
  },
  tileTitleStyle: {
    marginTop: -150
  },
  registrationButtonStyle: {
    borderColor: 'white',
    borderWidth: 0.5,
    backgroundColor: '#3abdee'
  },
  loginButtonStyle: {
    backgroundColor: '#3abdee'
  }
});

export default Home;