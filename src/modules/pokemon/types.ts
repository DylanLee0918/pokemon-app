import type { Action } from "../../types/Redux";

export const Actions = {
  GET_POKEMON_START: "@pokemon/GET_POKEMON_START",
  GET_POKEMON_FULFILLED: "@pokemon/GET_POKEMON_FULFILLED",
  GET_POKEMON_REJECTED: " @pokemon/GET_POKEMON_REJECTED",
  GET_POKEMON_DETAILS_START: "@pokemon/GET_POKEMON_DETAILS_START",
  GET_POKEMON_DETAILS_FULFILLED: "@pokemon/GET_POKEMON_DETAILS_FULFILLED",
  GET_POKEMON_DETAILS_REJECTED: "@pokemon/GET_POKEMON_DETAILS_REJECTED",
} as const;

export interface DataState {
  pokemonInfo: PokemonDetails;
}

export interface PokemonList {
  name: string;
}

export interface PokemonDetails {
  types: PokemonType[];
  abilities: PokemonAbilities[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: PokemonStats[];
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonAbilities {
  ability: {
    name: string;
  };
}

export interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

type WithLoadingList<T> = {
  isLoading: boolean;
  list: T;
};

type WithLoadingItem = {
  isLoading: boolean;
  list: PokemonDetails | null;
};

export interface PokemonState {
  pokemon: WithLoadingList<PokemonList[]>;
  pokemonDetail: WithLoadingItem;
}

export type GetPokemonRequest = Action<typeof Actions.GET_POKEMON_START>;
type GetPokemonAction = Action<
  typeof Actions.GET_POKEMON_FULFILLED,
  PokemonList[]
>;
type GetPokemonError = Action<typeof Actions.GET_POKEMON_REJECTED>;

export type GetPokemonDetailsRequest = Action<
  typeof Actions.GET_POKEMON_DETAILS_START,
  string
>;
export type GetPokemonDetailsAction = Action<
  typeof Actions.GET_POKEMON_DETAILS_FULFILLED,
  PokemonDetails
>;
type GetPokemonDetailsError = Action<
  typeof Actions.GET_POKEMON_DETAILS_REJECTED
>;

export type PokemonTypes =
  | GetPokemonRequest
  | GetPokemonAction
  | GetPokemonError
  | GetPokemonDetailsRequest
  | GetPokemonDetailsAction
  | GetPokemonDetailsError;
