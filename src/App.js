import MainView from "./Views/MainView";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import courtReducer from "./Reducers/CourtsReducer";
import mapcontrolReducer from "./Reducers/MapControlReducer";
import settingsReducer from "./Reducers/SettingsReducer";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const reducer = combineReducers({
    mapControls: mapcontrolReducer,
    courts: courtReducer,
    settings: settingsReducer,
  });

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <StatusBar style="hidden" />
      <MainView />
    </Provider>
  );
}
