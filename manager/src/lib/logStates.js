export const logStates = (state, type, options) => {
  console.log('Action Type:\n\t', type);
  console.log('Previous States:\n\t', state);
  console.log('Current States:\n\t', { ...state, ...options });
  console.log('');
};