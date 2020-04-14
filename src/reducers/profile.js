const profileDefaultState = {
  firstName: "",
  lastName: "",
  eMail: "",
  favoriteRestaurant: "",
  isSubmitted: false,
};

export default (state = profileDefaultState, action) => {
  switch (action.type) {
    case "ADD_FIRST_NAME":
      return {
        ...state,
        firstName: action.firstName,
      };
    case "ADD_LAST_NAME":
      return {
        ...state,
        lastName: action.lastName,
      };
    case "ADD_EMAIL_ADDRESS":
      return {
        ...state,
        eMail: action.eMail,
      };
    case "ADD_FAVORITE_RESTAURANT":
      return {
        ...state,
        favoriteRestaurant: action.favoriteRestaurant,
      };
    case "IS_FORM_SUBMITTED":
      return {
        ...state,
        isSubmitted: true,
      };
    default:
      return state;
  }
};
