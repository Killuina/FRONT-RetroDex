import styled from "styled-components";

const PokemonListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  .pokemon-card {
    margin-bottom: ${(props) => props.theme.margins.standard};
  }
`;

export default PokemonListStyled;
