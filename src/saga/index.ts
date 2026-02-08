/**
 * @all - runs multiple sagas in parallel and waits for all of them to complete
 * @fork - creates a non-blocking call to a saga, allowing the parent saga to continue executing without waiting for the forked saga to finish
 */
import { all, fork } from "redux-saga/effects";
import { pokemonWatchers } from "./pokemon";

/**
 * @function* - the asterisk makes this a generator function (required for sagas)
 * @rootSaga - the main saga that combines all other sagas in the application;
 * It is the entry point for all side effects in the app; Exported to be run by the saga middleware in the store configuration file
 * @yield - pauses execution and waits for the effect to complete
 * @all - runs all sagas inside the array simultaneously
 */
export function* rootSaga() {
  yield all([fork(pokemonWatchers)]);
}
