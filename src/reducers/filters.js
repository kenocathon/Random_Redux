const filterReducerDefaultState = {
  showFavorite: true,
  numberOfGuests: 4,
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SHOW_FAVORITE":
      return {
        ...state,
        showFavorite: action.showFavorite,
      };
    default:
      return state;
  }
};
