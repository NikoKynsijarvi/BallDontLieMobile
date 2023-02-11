const settingsReducer = (state = { sidebarOpen: false }, action) => {
  switch (action.type) {
    case "HANDLE_SIDEBAR":
      console.log("here");
      return (state = { sidebarOpen: !state.sidebarOpen });
    default:
      return state;
  }
};

export const handleSideBar = () => {
  return {
    type: "HANDLE_SIDEBAR",
  };
};

export default settingsReducer;
