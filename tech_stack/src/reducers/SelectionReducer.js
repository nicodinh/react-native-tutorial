export default (state = null, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'select_library':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};