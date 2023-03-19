import CreatePokemonForm from "../../components/CreatePokemonForm/CreatePokemonForm";
import PageStyled from "../../styles/PageStyled";

const CreatePokemonPage = (): JSX.Element => {
  return (
    <PageStyled>
      <h2>Create your Pokémon</h2>
      <CreatePokemonForm />
    </PageStyled>
  );
};

export default CreatePokemonPage;
