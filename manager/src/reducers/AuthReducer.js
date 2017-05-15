import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actions/types';
import {
  displayStates,
  emailStates,
  passwordStates,
  loginSuccessStates,
  loginFailStates
} from '../lib/displayStates';
 
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
