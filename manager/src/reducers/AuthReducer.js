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
      displayStates(state, action, 'email');
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      displayStates(state, action, 'password');
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      displayStates(state, action, 'user');
      return { ...state, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '' };
    default:
      return state;
  }
};