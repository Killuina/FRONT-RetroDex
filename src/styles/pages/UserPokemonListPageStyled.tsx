import styled from "styled-components";

const UserPokemonListPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: ${(props) => props.theme.fonts.sizes.bigSize};
  }
`;
export default UserPokemonListPageStyled;
