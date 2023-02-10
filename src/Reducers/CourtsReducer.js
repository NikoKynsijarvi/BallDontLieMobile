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
    case "SELECT_COURT":
      return (state = { ...state, selectedCourt: action.data });
    case "UNSELECT_COURT":
      return (state = { ...state, selectedCourt: null });
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

export const selectCourt = (data) => {
  return {
    type: "SELECT_COURT",
    data,
  };
};
export const unselectCourt = () => {
  return {
    type: "UNSELECT_COURT",
  };
};

export default courtReducer;
