import { applyMiddleware, legacy_createStore as createStore } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";

/** Imports combined reducers */
import reducers from "./modules/reducers.ts";
/** Imports the main saga that orchestrates all side effects */
import { rootSaga } from "./saga";

/** Creates middleware that allows redux to work with sagas */
const sagaMiddleware = createSagaMiddleware();
/** An array of middleware to apply, but can add other middleware */
const middleware = [sagaMiddleware];
/** Starting state of redux store; reducers will use their own default state */
const initialState = {};

/**
 * @reducers - state management logic for the app
 * @initialState - the starting state of the app
 * @middleware - an array of middleware to apply to the store, but can add other middleware
 * @composeWithDevTools - a function that enhances the store with dev tools capabilities
 */
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

/**
 * Starts the saga middleware; making it actively listen for actions
 * and execute the corresponding sagas when those actions are dispatched.
 */
sagaMiddleware.run(rootSaga);

/** Exports the configured store so you can provide it to React App via <Provider store={store}> */
export default store;
