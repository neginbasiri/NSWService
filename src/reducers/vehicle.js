import { VEHICLE_LIST } from "../actions";
export const vehicleReducer = (state = [], action) => {
  switch (action.type) {
    case VEHICLE_LIST:
      return action.payload;
    default:
      return state;
  }
};
