import styled from "styled-components";

const PageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 30px;

  .no-results-feedback {
    padding: 1rem;
    font-size: ${(props) => props.theme.fonts.sizes.pokemonDescriptionSize};
  }

  h2 {
    font-size: ${(props) => props.theme.fonts.sizes.bigSize};
  }
`;

export default PageStyled;
