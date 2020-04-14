import { v4 as uuidv4 } from "uuid";

//ADD_RESTAURANT
export const addRestaurant = (restaurantName = "") => ({
  type: "ADD_RESTAURANT",
  restaurant: {
    id: uuidv4(),
    restaurantName,
  },
});

//REMOVE_RESTAURANT
export const removeRestaurant = ({ id } = {}) => ({
  type: "REMOVE_RESTAURANT",
  id,
});
