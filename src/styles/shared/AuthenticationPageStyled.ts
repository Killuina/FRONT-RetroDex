import styled from "styled-components";

const AuthenticationPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 100px;
  gap: 80px;

  .auth-form-container {
    width: 100%;
    max-width: 400px;
    padding-bottom: 30px;
    @media (min-width: 768px) {
      box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
      border-radius: ${(props) => props.theme.border.radius};
    }
  }

  .page-heading {
    text-align: center;
    display: none;

    @media (min-width: 768px) {
      display: inline-block;
    }

    &__title {
      margin-top: 10px;
      font-size: 3rem;
    }

    &__subtitle {
      font-size: 1.25rem;
      font-weight: ${(props) => props.theme.fonts.weights.semiBold};
    }
  }

  .page {
    &__link {
      text-align: center;
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
