import axios from "axios";

export const VEHICLE_LIST = "VEHICLE_LIST";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const setError = (hasError) => ({
  type: SET_ERROR,
  payload: hasError,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const getVehicleList = () => {
  console.log("getVehicleList");
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await axios.get(
        "https://dl.dropboxusercontent.com/s/wcp5aajrrx533bp/snsw_registrations_api.json"
      );

      dispatch({
        type: VEHICLE_LIST,
        payload: response.data.registrations,
      });

      dispatch(setLoading(false));
      dispatch(setError(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(true));
    }
  };
};
