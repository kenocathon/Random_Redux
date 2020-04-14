//NUMBER_OF_GUESTS
export const numberOfGuests = (number) => ({
  type: "NUMBER_OF_GUESTS",
  number,
});

//SHOW_FAVORITE
export const showFavorite = (showFavorite = false) => ({
  type: "SHOW_FAVORITE",
  showFavorite,
});
