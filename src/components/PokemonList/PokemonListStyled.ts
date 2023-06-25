import styled from "styled-components";

const PokemonListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.theme.paddings.standard};

  li {
    width: 100%;
  }

  .pokemon-card {
    margin-bottom: ${(props) => props.theme.margins.standard};
  }
`;

export default PokemonListStyled;
