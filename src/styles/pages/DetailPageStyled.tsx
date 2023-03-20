import styled from "styled-components";

const DetailPageStyled = styled.div`
  padding: ${(props) => props.theme.paddings.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${(props) => props.theme.fonts.sizes.pokemonDescriptionSize};

  .pokemon-detail {
    p {
      font-size: ${(props) => props.theme.fonts.sizes.textSize};
      text-align: start;
      padding-bottom: 1rem;
      border-bottom: solid 2px ${(props) => props.theme.colors.textBorderColor};

      span {
        font-weight: ${(props) => props.theme.fonts.weights.bold};
      }
    }
  }
`;

export default DetailPageStyled;
