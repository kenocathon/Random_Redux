import { v4 as uuidv4 } from "uuid";

//ADD_GUEST
export const addGuest = (guestName = "", restaurantName = "") => ({
  type: "ADD_GUEST",
  guests: {
    id: uuidv4(),
    guestName,
    restaurantName,
  },
});

//REMOVE_GUEST
export const removeGuest = ({ id } = {}) => ({
  type: "REMOVE_GUEST",
  id,
});
