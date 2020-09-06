import { combineReducers } from "redux";
import { errorReducer } from "./error";
import { loadingReducer } from "./loading";
import { vehicleReducer } from "./vehicle";

export const reducers = combineReducers({
  vehicles: vehicleReducer,
  isLoading: loadingReducer,
  hasError: errorReducer,
});
