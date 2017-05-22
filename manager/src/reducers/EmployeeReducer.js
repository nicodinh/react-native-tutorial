import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';
import { logStates } from '../lib/logStates';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      //logStates(state, action.type);
      //console.log(action);
      // return { ...state, [id]: action.payload };
      // return state;
      return action.payload;
    default:
      return state;
  }
};