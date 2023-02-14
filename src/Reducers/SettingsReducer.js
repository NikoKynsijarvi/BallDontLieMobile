const settingsReducer = (
  state = { sidebarOpen: false, filterText: "" },
  action
) => {
  switch (action.type) {
    case "HANDLE_SIDEBAR":
      return (state = { ...state, sidebarOpen: !state.sidebarOpen });
    case "FILTER_NAME":
      return (state = { ...state, filterText: action.data });
    default:
      return state;
  }
};

export const handleSideBar = () => {
  return {
    type: "HANDLE_SIDEBAR",
  };
};

export const filterByName = (data) => {
  return {
    type: "FILTER_NAME",
    data,
  };
};

export default settingsReducer;
