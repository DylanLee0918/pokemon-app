import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

/** Imports combined reducers */
import reducers from "./modules/reducers.ts";
/** Imports the main saga that orchestrates all side effects */
import { rootSaga } from "./saga";

/** Creates middleware that allows redux to work with sagas */
const sagaMiddleware = createSagaMiddleware();

/**
 * @reducer - state management logic for the app
 * @middleware - configures saga middleware
 * @devTools - automatically includes Redux DevTools in development
 */
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // We're using sagas, not thunks
      serializableCheck: false, // Adjust based on your needs
    }).concat(sagaMiddleware),
});

/**
 * Starts the saga middleware; making it actively listen for actions
 * and execute the corresponding sagas when those actions are dispatched.
 */
sagaMiddleware.run(rootSaga);

/** Export types for TypeScript */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/** Exports the configured store so you can provide it to React App via <Provider store={store}> */
export default store;
