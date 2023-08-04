import "./App.css";

import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/IceCreamContainer";
import CakeWithPayload from "./components/CakeWithPayload";
import UserContainer from "./components/UserContainer";
import PostSaga from "./components/postSaga/postSaga";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <CakeWithPayload/> */}
        {/* <UserContainer /> */}
        <PostSaga />
      </div>
    </Provider>
  );
}

export default App;
