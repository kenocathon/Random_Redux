import { createStore, combineReducers } from "redux";
import restaurantReducer from "../reducers/restaurants";
import guestsReducer from "../reducers/guests";
import profileReducer from "../reducers/profile";
import filterReducer from "../reducers/filters.js";
import { reducer as formReducer } from "redux-form";

export default () => {
  const store = createStore(
    combineReducers({
      restaurants: restaurantReducer,
      guests: guestsReducer,
      profile: profileReducer,
      filter: filterReducer,
      form: formReducer,
    })
  );
  return store;
};
