import styled from "styled-components";

const PageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: ${(props) => props.theme.fonts.sizes.bigSize};
  }
`;

export default PageStyled;
