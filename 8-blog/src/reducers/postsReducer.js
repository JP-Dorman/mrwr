export default (state=[], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    // case 'OTHER':
      // return anction.payload.something
    default:
      return state;
  }
}
