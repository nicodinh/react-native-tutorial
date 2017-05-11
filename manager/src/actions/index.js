import { EMAIL_CHANGED } from './types';

export const emailChanged = (text) => {
  return {
    type: 'email_changed',
    payload: text
  };
};