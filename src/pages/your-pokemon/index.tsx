import PokemonList from "../../components/PokemonList/PokemonList";
import ClientSideProtectedRoute from "../../components/ProtectedRoute/ClientSideProtectedRoute";
import UserPokemonListPageStyled from "../../styles/pages/UserPokemonListPageStyled";

const UserPokemonListPage = (): JSX.Element => {
  return (
    <ClientSideProtectedRoute>
      <UserPokemonListPageStyled>
        <h2>Your Pokémon</h2>
        <PokemonList
          pokemonList={[
            {
              name: "Pikachu",
              types: ["Electric"],
              ability: "Static",
              height: 1,
              weight: 6,
              baseExp: 112,
              imageUrl:
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/f/fe/Pokemans_025.gif?width=1280",
              id: "640f22f29ef06cb2185232e3",
            },
            {
              name: "Empoleon",
              types: ["Water", "Steel"],
              ability: "Torrent",
              height: 17,
              weight: 845,
              baseExp: 239,
              imageUrl:
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/9/94/Pokemans_395.gif?width=1280",
              id: "640f22f29ef06cb2185232e4",
            },
            {
              name: "Chandelure",
              types: ["Fire", "Ghost"],
              ability: "Flame body",
              height: 10,
              weight: 343,
              baseExp: 250,
              imageUrl:
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/5/50/Pokemans_609.gif?width=1280",
              id: "640f22f29ef06cb2185232e5",
            },
            {
              name: "Mewtwo",
              types: ["Psychic"],
              ability: "Pressure",
              height: 20,
              weight: 1120,
              baseExp: 340,
              imageUrl:
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/7/7d/Pokemans_150.gif?width=1280",
              id: "640f22f29ef06cb2185232e6",
            },
          ]}
        />
      </UserPokemonListPageStyled>
    </ClientSideProtectedRoute>
  );
};

export default UserPokemonListPage;
