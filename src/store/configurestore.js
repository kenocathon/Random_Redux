import { createStore, combineReducers } from "redux";
import restaurantReducer from "../reducers/restaurants";
import guestsReducer from "../reducers/guests";
import profileReducer from "../reducers/profile";
import filterReducer from "../reducers/filters.js";

export default () => {
  const store = createStore(
    combineReducers({
      restaurants: restaurantReducer,
      guests: guestsReducer,
      profile: profileReducer,
      filter: filterReducer,
    })
  );
  return store;
};
