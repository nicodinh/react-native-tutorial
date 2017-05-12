import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';
import { displayStates } from '../lib/displayStates';
 
const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      displayStates(state, action, 'email');
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      displayStates(state, action, 'password');
      return { ...state, password: action.payload }      
    default:
      return state;
  }
};