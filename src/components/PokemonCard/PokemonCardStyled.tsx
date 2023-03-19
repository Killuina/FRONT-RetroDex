import styled from "styled-components";

const PokemonCardStyled = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.paddings.standard};
  border-radius: ${(props) => props.theme.border.radius};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  .pokemon-card {
    &__name {
      font-size: ${(props) => props.theme.fonts.sizes.pokemonNameSize};
    }

    &__types {
      font-size: ${(props) => props.theme.fonts.sizes.pokemonDescriptionSize};
    }

    &__buttons {
      padding: 0 ${(props) => props.theme.paddings.standard};
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
    }
  }
`;

export default PokemonCardStyled;
