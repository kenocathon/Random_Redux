const guestsReducerDefaultState = [];
export default (state = guestsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_GUEST":
      return [...state, action.guests];
    case "REMOVE_GUEST":
      return state.filter(({ id }) => id !== action.id);
    case "REMOVE_ALL_GUESTS":
      return [];
    case "EDIT_GUEST":
      return state.map((guest) => {
        if (guest.id === action.id) {
          return {
            ...guest,
            ...action.updates,
          };
        } else {
          return guest;
        }
      });
    default:
      return state;
  }
};
