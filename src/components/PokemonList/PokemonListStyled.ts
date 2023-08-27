import styled from "styled-components";

const PokemonListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.paddings.standard};
  width: 100%;

  .pokemon-card {
    margin-bottom: ${(props) => props.theme.margins.standard};
  }
`;

export default PokemonListStyled;
