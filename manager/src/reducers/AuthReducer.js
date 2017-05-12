import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from '../actions/types';
import { displayStates } from '../lib/displayStates';
 
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  action.type === LOGIN_USER_SUCCESS ? console.log(action) : null;

  switch (action.type) {
    case EMAIL_CHANGED:
      displayStates(state, action, 'email');
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      displayStates(state, action, 'password');
      return { ...state, password: action.payload }
    case LOGIN_USER_SUCCESS:
      displayStates(state, action, 'user');
      return { ...state, user: action.payload }
    default:
      return state;
  }
};