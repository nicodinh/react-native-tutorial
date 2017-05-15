export const displayStates = (state, action, key) => {
  console.log('Action Type:\n\t', action.type);
  console.log('Previous States:\n\t', state);
  console.log('Current States:\n\t', { ...state, [key]: action.payload });
  console.log('');
};

export const emailStates = (state, action) => {
  console.log('Action Type:\n\t', action.type);
  console.log('Previous States:\n\t', state);
  console.log('Current States:\n\t', { ...state, 'email': action.payload });
  console.log('');
};

export const passwordStates = (state, action) => {
  console.log('Action Type:\n\t', action.type);
  console.log('Previous States:\n\t', state);
  console.log('Current States:\n\t', { ...state, 'password': action.payload });
  console.log('');
};

export const loginSuccessStates = (state, action) => {
  console.log('Action Type:\n\t', action.type);
  console.log('Previous States:\n\t', state);
  console.log('Current States:\n\t', { ...state, 'user': action.payload, error: '' });
  console.log('');
};

export const loginFailStates = (state, action) => {
  console.log('Action Type:\n\t', action.type);
  console.log('Previous States:\n\t', state);
  console.log('Current States:\n\t', { ...state, error: 'Authentication Failed.', password: '' });
  console.log('');
};