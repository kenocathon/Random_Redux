import { v4 as uuidv4 } from "uuid";

//ADD_RESTAURANT
export const addRestaurant = (restaurantName = "") => (
  {
  type: "ADD_RESTAURANT",
  restaurantName,
});

//REMOVE_RESTAURANT
export const removeRestaurant = ({ id } = {}) => ({
  type: "REMOVE_RESTAURANT",
  id,
});
