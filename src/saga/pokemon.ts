import { call, put, all, takeLatest } from "redux-saga/effects";
import { type SagaIterator } from "redux-saga";
import axios from "axios";
import {
  Actions,
  type GetPokemonDetailsRequest,
} from "../modules/pokemon/types";

export function* getPokemon(): SagaIterator {
  try {
    const response = yield call(
      axios.get,
      "https://pokeapi.co/api/v2/pokemon?limit=151",
    );
    yield put({
      type: Actions.GET_POKEMON_FULFILLED,
      payload: response.data.results,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching Pokémon list:", error.message);
    }
    yield put({
      type: Actions.GET_POKEMON_REJECTED,
      payload: undefined,
    });
  }
}

export function* getPokemonDetail(
  action: GetPokemonDetailsRequest,
): SagaIterator {
  const name = action.payload;

  try {
    const response = yield call(
      axios.get,
      `https://pokeapi.co/api/v2/pokemon/${name}`,
    );

    yield put({
      type: Actions.GET_POKEMON_DETAILS_FULFILLED,
      payload: { data: response.data },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching Pokémon details:", error.message);
    }
    yield put({
      type: Actions.GET_POKEMON_DETAILS_REJECTED,
      payload: undefined,
    });
  }
}

export function* pokemonWatchers() {
  yield all([
    takeLatest(Actions.GET_POKEMON_START, getPokemon),
    takeLatest(Actions.GET_POKEMON_DETAILS_START, getPokemonDetail),
  ]);
}
