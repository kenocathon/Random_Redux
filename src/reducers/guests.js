const guestsReducerDefaultState = [];
export default (state = guestsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_GUEST":
      return [...state, action.guests];
    case "REMOVE_GUEST":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
