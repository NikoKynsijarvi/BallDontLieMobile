import MainView from "./Views/MainView";
import { createStore } from "redux";
import { Provider } from "react-redux";
import courtReducer from "./Reducers/CourtsReducer";

export default function App() {
  const store = createStore(courtReducer);

  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
}
