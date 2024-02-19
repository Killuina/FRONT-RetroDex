import styled from "styled-components";

const PokemonListStyled = styled.ul`
  padding: ${(props) => props.theme.paddings.standard};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10% 5%;
  margin-bottom: 500px;

  @media (max-width: 697px) {
    gap: 5%;
  }
`;

export default PokemonListStyled;
