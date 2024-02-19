import styled from "styled-components";

const FormStyled = styled.form`
  font-weight: ${(props) => props.theme.fonts.weights.semiBold};
  color: ${(props) => props.theme.fonts.colors.dark};
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.paddings.medium};
  width: 100%;
  max-width: 500px;
  gap: 0.5rem;
  margin-bottom: ${(props) => props.theme.margins.standard};

  img {
    display: block;
    margin: 1rem auto;
  }

  .form {
    &__field {
      display: block;
      margin-bottom: ${(props) => props.theme.paddings.medium};
      border-radius: ${(props) => props.theme.border.radius};
      padding: 0.7rem;
      background-color: ${(props) => props.theme.colors.inputColor};
      border: solid 1px #a8abaf;
      border-radius: ${(props) => props.theme.border.radius};
      font-weight: inherit;
      font-family: inherit;
      font-size: inherit;
    }

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
  }
`;

export default FormStyled;
