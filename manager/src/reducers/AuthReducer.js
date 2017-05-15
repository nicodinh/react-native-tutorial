import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';
import {
  displayStates,
  emailStates,
  passwordStates,
  loginSuccessStates,
  loginFailStates,
  loginStates
} from '../lib/logStates';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      emailStates(state, action);
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      passwordStates(state, action);
      return { ...state, password: action.payload };
    case LOGIN_USER:
      loginStates(state, action);
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      loginSuccessStates(state, action);
      return { ...state, user: action.payload, error: '', loading: false };
    case LOGIN_USER_FAIL:
      loginFailStates(state, action);
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
};
