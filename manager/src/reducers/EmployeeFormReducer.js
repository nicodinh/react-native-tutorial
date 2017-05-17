import {
  EMPLOYEE_UPDATE
} from '../actions/types';
import { logStates } from '../lib/logStates';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { props: 'name', value: 'jane' }
      console.log(action.payload.name)
      logStates(state, action.type, { [action.payload.prop]: action.payload.value });
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};