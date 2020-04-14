const filterReducerDefaultState = {
  showFavorite: true,
  numberOfGuests: 4,
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SHOW_FAVORITE":
      return {
        ...state,
        showFavorite: !action.showFavorite,
      };
    case "NUMBER_OF_GUESTS":
      return {
        ...state,
        numberOfGuests: action.numberOfGuests,
      };
    default:
      return state;
  }
};
