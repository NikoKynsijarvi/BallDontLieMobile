const mapcontrolReducer = (
  state = {
    latitude: 60.165987,
    longitude: 24.942709,
    latitudeDelta: 0.8,
    longitudeDelta: 0.8,
  },
  action
) => {
  switch (action.type) {
    case "SET_COORDINATES":
      return (state = {
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
        latitude: action.data.latitude - 0.005,
        longitude: action.data.longitude,
      });
    case "UNSELECT_COURT":
      return (state = { ...state, latitudeDelta: 0.15, longitudeDelta: 0.15 });
    default:
      return state;
  }
};

export const focusToLocation = (data) => {
  return {
    type: "SET_COORDINATES",
    data,
  };
};

export const unselectCourt = () => {
  return {
    type: "UNSELECT_COURT",
  };
};

export default mapcontrolReducer;
