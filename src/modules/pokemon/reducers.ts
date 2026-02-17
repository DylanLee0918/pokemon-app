import update from "immutability-helper";
import { Actions, type PokemonState, type PokemonTypes } from "./types";

const initialState: PokemonState = {
  pokemon: {
    isLoading: false,
    list: [],
  },
  pokemonDetail: {
    isLoading: false,
    list: null,
  },
};

export const pokemonReducer = (
  state = initialState,
  action: PokemonTypes,
): PokemonState => {
  switch (action.type) {
    case Actions.GET_POKEMON_START: {
      return update(state, {
        pokemon: {
          isLoading: {
            $set: true,
          },
        },
      });
    }
    case Actions.GET_POKEMON_FULFILLED: {
      return update(state, {
        pokemon: {
          isLoading: {
            $set: false,
          },
          list: {
            $set: [...action.payload],
          },
        },
      });
    }
    case Actions.GET_POKEMON_REJECTED: {
      return update(state, {
        pokemon: {
          isLoading: {
            $set: false,
          },
        },
      });
    }
    case Actions.GET_POKEMON_DETAILS_START: {
      return update(state, {
        pokemonDetail: {
          isLoading: {
            $set: true,
          },
        },
      });
    }
    case Actions.GET_POKEMON_DETAILS_FULFILLED: {
      return update(state, {
        pokemonDetail: {
          isLoading: {
            $set: false,
          },
          list: {
            $set: action.payload,
          },
        },
      });
    }
    default: {
      return { ...state };
    }
  }
};
