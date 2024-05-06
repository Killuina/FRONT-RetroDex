import styled from "styled-components";

const FormStyled = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;

  .form {
    font-weight: ${(props) => props.theme.fonts.weights.semiBold};
    color: ${(props) => props.theme.fonts.colors.dark};
    display: flex;
    flex-direction: column;
    padding: ${(props) => props.theme.paddings.medium};
    gap: 1rem;
    margin-bottom: ${(props) => props.theme.paddings.standard};

    &__image-field {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
    }

    &__button {
      margin: 0 auto;
      width: 50%;
      margin-top: ${(props) => props.theme.paddings.medium};
      font-weight: ${(props) => props.theme.fonts.weights.semiBold};
      border-radius: ${(props) => props.theme.border.radius};
      padding: 0.75rem;
      color: ${(props) => props.theme.fonts.colors.white};
      background-color: ${(props) => props.theme.colors.accentColor};
      box-shadow: ${(props) => props.theme.colors.accentColor} 0px 6px 12px -2px;
    }

    &__button:disabled {
      box-shadow: none;
      background-color: ${(props) => props.theme.colors.disabledButtonColor};
    }

    img {
      display: block;
      margin: 1rem auto;
    }
  }

  .field-container {
    position: relative;
  }

  .field {
    display: block;
    margin-top: 0.75rem;
    width: 100%;
    border-radius: ${(props) => props.theme.border.radius};
    padding: 0.7rem;
    background-color: ${(props) => props.theme.colors.inputColor};
    border: solid 1px ${(props) => props.theme.colors.inputBorderColor};
    border-radius: ${(props) => props.theme.border.radius};
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;

    &__icon {
      position: absolute;
      right: 10px;
      top: 44px;
    }

    &__invalid-message {
      display: block;
      height: 25px;
      width: 100%;
      padding-top: 0.25rem;
      color: ${(props) => props.theme.colors.modalErrorColor};
      font-size: ${(props) => props.theme.fonts.sizes.smallSize};
    }

    &--invalid {
      border-color: ${(props) => props.theme.colors.modalErrorColor};
      outline: ${(props) => props.theme.colors.modalErrorColor};
    }
  }

  .field:focus {
    outline: solid 1.5px ${(props) => props.theme.fonts.colors.dark};
  }
`;

export default FormStyled;
