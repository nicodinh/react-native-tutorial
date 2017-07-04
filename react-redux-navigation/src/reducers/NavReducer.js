import {
  NAV_DASHBOARD
} from '../actions/types';

const INITIAL_STATE = {
  currentRoute: 'Home'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAV_DASHBOARD:
      return { ...state, currentRoute: action.payload };
    default:
      return state;
  }
};