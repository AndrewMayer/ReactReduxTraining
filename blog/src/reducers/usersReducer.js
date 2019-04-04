export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      const testing = [...state, action.payload];
      return testing;
    default:
      return state;
  }
};
