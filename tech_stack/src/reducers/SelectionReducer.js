export default (state = null, action) => {
  switch (action.type) {
    case 'select_livrary':
      return action.payload;
    default:
      return state;
  }
};