import styled from "styled-components";

const PokemonListStyled = styled.ul`
  padding: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 380px));
  justify-content: center;
  row-gap: 70px;
  margin-bottom: 100px;
`;

export default PokemonListStyled;
