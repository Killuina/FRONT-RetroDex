import styled from "styled-components";

const AuthenticationPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  .page {
    &__link {
      font-weight: ${(props) => props.theme.fonts.weights.semiBold};

      a {
        color: ${(props) => props.theme.colors.accentColor};
        text-decoration: underline;
      }
    }
  }

  h2 {
    font-size: ${(props) => props.theme.fonts.sizes.bigSize};
  }
`;

export default AuthenticationPageStyled;
