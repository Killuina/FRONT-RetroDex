import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { uiReducer } from "./features/ui/uiSlice";
import { userReducer } from "./features/user/userSlice";
import { pokemonReducer } from "./features/userPokemon/pokemonSlice";

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  pokemon: pokemonReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
