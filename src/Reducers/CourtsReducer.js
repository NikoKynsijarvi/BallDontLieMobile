const courtReducer = (
  state = {
    courts: [],
    selectedCourt: null,
  },
  action
) => {
  switch (action.type) {
    case "INIT_COURTS":
      const initialized = { ...state, courts: action.data };
      return (state = initialized);
    default:
      return state;
  }
};

export const initCourts = (data) => {
  return {
    type: "INIT_COURTS",
    data,
  };
};

export default courtReducer;
