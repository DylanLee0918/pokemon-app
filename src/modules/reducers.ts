/**
 * Import combineReducers from redux; this utility combines multiple reducer functions
 * into a single reducer function that manage the entire app state.
 */
import { combineReducers } from "redux";

/** Combines all individual reducers into a single root reducer */
const reducers = combineReducers({
  /**
   * Add your reducers here
   *
   * example:
   * user: userReducer,
   * productts: productsReducer,
   * cart: cartReducer,
   */
});

/**
 * @RootState - Type representing the overall state structure of the Redux store.
 * @ReturnType - Utility type that infers the return type of the combined reducers function.
 * @typeof - Operator that gets the type of the reducers variable.
 * @redurers - The combined reducers function managing the app state.
 */
export type RootState = ReturnType<typeof reducers>;

/** Exports the combined reducer so it can be imported in store configuration file */
export default reducers;
