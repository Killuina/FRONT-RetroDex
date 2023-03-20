import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  height: 82vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fonts.sizes.bigSize};
  width: 100%;

  span {
    font-size: 4rem;
  }
`;

export default NotFoundPageStyled;
