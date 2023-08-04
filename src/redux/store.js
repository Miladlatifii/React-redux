import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk,sagaMiddleware))
);

sagaMiddleware.run(rootSaga)
export default store;
