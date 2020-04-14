export const addFirstName = (firstName = "") => ({
  type: "ADD_FIRST_NAME",
  firstName,
});

export const addLastName = (lastName = "") => ({
  type: "ADD_LAST_NAME",
  lastName,
});

export const addEmail = (eMail = "") => ({
  type: "ADD_EMAIL_ADDRESS",
  eMail,
});

export const addFavoriteRestaurant = (favoriteRestaurant = "") => ({
  type: "ADD_FAVORITE_RESTAURANT",
  favoriteRestaurant,
});

export const formSubmitted = (isSubmitted) => ({
  type: "IS_FORM_SUBMITTED",
  isSubmitted,
});
