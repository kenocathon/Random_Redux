const restaurantDefaultState = [];

export default (state = restaurantDefaultState, action) => {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return [...state, action.restaurant];
    case "REMOVE_RESTAURANT":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
