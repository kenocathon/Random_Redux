const restaurantDefaultState = {
  id: "",
  restaurantName: "",
};

export default (state = restaurantDefaultState, action) => {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return { ...state, restaurantName: action.restaurantName };
    default:
      return state;
  }
};
