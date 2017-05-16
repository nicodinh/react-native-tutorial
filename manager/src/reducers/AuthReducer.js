import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';
import { logStates } from '../lib/logStates';

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
      logStates(state, action.type, { email: action.payload });
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      logStates(state, action.type, { password: action.payload });
      return { ...state, password: action.payload };
    case LOGIN_USER:
      logStates(state, action.type, { loading: true, error: '' });
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      logStates(state, action.type, Object.assign(INITIAL_STATE, { user: action.payload }));
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      logStates(state, action.type, { error: 'Authentication Failed.', password: '', loading: false });
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
};
