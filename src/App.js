import MainView from "./Views/MainView";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import courtReducer from "./Reducers/CourtsReducer";
import mapcontrolReducer from "./Reducers/MapControlReducer";

export default function App() {
  const reducer = combineReducers({
    mapControls: mapcontrolReducer,
    courts: courtReducer,
  });

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
}
