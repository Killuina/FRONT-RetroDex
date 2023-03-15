import styled from "styled-components";

const PokemonCardStyled = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 17rem;
  width: 17rem;
  padding: 1rem;
  border-radius: ${(props) => props.theme.border.radius};

  .pokemon-card {
    &__name {
      font-size: ${(props) => props.theme.fonts.sizes.pokemonNameSize};
    }

    &__types {
      font-size: ${(props) => props.theme.fonts.sizes.pokemonDescriptionSize};
    }

    &__buttons {
      width: 15rem;
      display: flex;
      justify-content: space-between;
      position: absolute;
    }
  }
`;

export default PokemonCardStyled;
