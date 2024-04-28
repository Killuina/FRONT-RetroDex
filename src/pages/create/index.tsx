import PokemonForm from "../../components/Forms/PokemonForm/PokemonForm";
import PageStyled from "../../styles/shared/PageStyled";

const CreatePokemonPage = (): JSX.Element => {
  return (
    <PageStyled>
      <h2>Create your Pokémon</h2>
      <PokemonForm />
    </PageStyled>
  );
};

export default CreatePokemonPage;
