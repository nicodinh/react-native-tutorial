import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actions/types';
import { displayStates } from '../lib/displayStates';
 
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      //displayStates(state, action, 'email');
      emailStates(state, action);
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      //displayStates(state, action, 'password');
      passwordStates(state, action);
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      //displayStates(state, action, 'user');
      loginSuccessStates(state, action);
      return { ...state, user: action.payload, error: '' };
    case LOGIN_USER_FAIL:
      //displayStates(state, action, 'error');
      loginFailStates(state, action);
      return { ...state, error: 'Authentication Failed.', password: '' };
    default:
      return state;
  }
};

const emailStates = (state, action) => {
  console.log('Action Type:\n\t', action.type);
  console.log('Previous States:\n\t', state);
  console.log('Current States:\n\t', { ...state, 'email': action.payload });
  console.log('');
};

const passwordStates = (state, action) => {
  console.log('Action Type:\n\t', action.type);
  console.log('Previous States:\n\t', state);
  console.log('Current States:\n\t', { ...state, 'password': action.payload });
  console.log('');
};

const loginSuccessStates = (state, action) => {
  console.log('Action Type:\n\t', action.type);
  console.log('Previous States:\n\t', state);
  console.log('Current States:\n\t', { ...state, 'user': action.payload, error: '' });
  console.log('');
};

const loginFailStates = (state, action) => {
  console.log('Action Type:\n\t', action.type);
  console.log('Previous States:\n\t', state);
  console.log('Current States:\n\t', { ...state, error: 'Authentication Failed.', password: '' });
  console.log('');
};