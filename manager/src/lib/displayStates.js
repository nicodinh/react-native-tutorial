export const displayStates = (state, action, key) => {
  // if (!key) {
  //   console.log('Action')
  //   console.log('\tType:\n\t\t', action.type);
  //   console.log('\tPayload:\n\t\t', action.payload);
  //   console.log('');
  // } else {
    console.log('Type:\n\t', action.type);
    console.log('Previous:\n\t', state);
    console.log('Current:\n\t', { ...state, [key]: action.payload });
    console.log('');
  // }
};