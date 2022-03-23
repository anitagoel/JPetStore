import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./Reducers/index";
import rootSaga from "./Sagas/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
