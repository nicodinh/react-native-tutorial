import {
  NAV_HOME,
  NAV_LOGIN,
  NAV_REGISTER
} from './types';

export const navHome = (dispatch) => {
  dispatch({
    type: NAV_HOME  
  });
};

export const navLogin = (dispatch) => {
  dispatch({
    type: NAV_LOGIN  
  });
};

export const navRegister = (dispatch) => {
  dispatch({
    type: NAV_REGISTER  
  });
};