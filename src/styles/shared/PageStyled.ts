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

  .create-pokemon-link {
    margin: 0 auto;
    margin-top: ${(props) => props.theme.paddings.medium};
    font-weight: ${(props) => props.theme.fonts.weights.semiBold};
    border-radius: ${(props) => props.theme.border.radius};
    padding: 1rem;
    color: ${(props) => props.theme.fonts.colors.white};
    background-color: ${(props) => props.theme.colors.accentColor};
    box-shadow: ${(props) => props.theme.colors.accentColor} 0px 6px 12px -2px;
  }

  h2 {
    font-size: ${(props) => props.theme.fonts.sizes.bigSize};
  }
`;

export default PageStyled;
