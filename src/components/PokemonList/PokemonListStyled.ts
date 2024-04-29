import styled from "styled-components";

const PokemonListStyled = styled.ul`
  padding: ${(props) => props.theme.paddings.standard};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
  justify-content: center;
  row-gap: 40px;
  margin-bottom: 200px;
`;

export default PokemonListStyled;
