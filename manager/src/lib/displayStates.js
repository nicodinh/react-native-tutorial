export const displayStates = (state, action, key) => {
  console.log('Previous:\n\t', state);
  console.log('Current:\n\t', { ...state, [key]: action.payload });
};