import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from './types';

// Action Creator `emailChanged`
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

// Action Creator `passwordChanged`
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

// Action Creator `loginUser` using ReduxThunk
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => console.log(user));
  };
};