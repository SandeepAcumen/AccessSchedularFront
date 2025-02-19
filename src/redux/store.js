import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas/rootSaga.js";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./reducers/rootReducer.js";
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
