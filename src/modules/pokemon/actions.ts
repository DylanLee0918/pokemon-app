import { Actions, type PokemonTypes } from "./types";

export const getPokemonList = (): PokemonTypes => ({
  type: Actions.GET_POKEMON_START,
  payload: undefined,
});

export const getPokemonByName = (name: string) => ({
  type: Actions.GET_POKEMON_DETAILS_START,
  payload: name,
});
