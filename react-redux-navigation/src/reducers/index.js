import { combineReducers }  from 'redux';

import AuthReducer          from './AuthReducer';
//import NavReducer           from './NavReducer';
import { nav, auth}           from './AppReducer';

export default combineReducers({
  // auth: AuthReducer,
  nav,
  auth
  // AppReducer: AppReducer
})