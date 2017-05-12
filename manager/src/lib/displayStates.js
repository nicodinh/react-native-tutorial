export const displayStates = (state, action, key) => {
  console.log('Action Type:\n\t', action.type);
  console.log('Previous States:\n\t', state);
  console.log('Current States:\n\t', { ...state, [key]: action.payload });
  console.log('');
};