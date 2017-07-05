
import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Home                 from '../components/Home';
import Registration         from '../components/Registration';
import Login                from '../components/Login';
import Dashboard            from '../components/Dashboard';

export const AppNavigator = StackNavigator({
  Home: { screen: Home },
  Registration: { screen: Registration },
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);