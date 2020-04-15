const restaurantDefaultState = {
  id:"",
  restaurantName: "",
};

export default (state = restaurantDefaultState, action) => {
  switch (action.type) {
    case "ADD_RESTAURANT":
      console.log(action.restaurantName)
      return {...state, restaurantName: action.restaurantName};
    case "REMOVE_RESTAURANT":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
