import { JwtPayload } from "jwt-decode";
import { UserPokemonList } from "../store/features/userPokemon/types";

export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface UserPokemonListResponse {
  pokemon: UserPokemonList;
}

export interface CustomJwtPayload extends JwtPayload {
  sub: string;
  username: string;
}
