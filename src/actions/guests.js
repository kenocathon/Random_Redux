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

//REMOVE_ALL_GUESTS
export const removeAllGuests = () => ({
  type: "REMOVE_ALL_GUESTS",
});

//EDIT_GUEST
export const editGuest = (id, updates) => ({
  type: "EDIT_GUEST",
  id,
  updates,
});
