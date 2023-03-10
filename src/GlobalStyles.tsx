import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}

body {
  background-color: ${(props) => props.theme.colors.mainColor};
  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  border: none;
  cursor: pointer;
  font-weight: inherit;
  font-family: inherit;
  font-size: inherit;
}

input {
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.inputColor};
  border: solid 1px;
  font-weight: inherit;
  font-family: inherit;
  font-size: inherit;
}

ul, li, ol {
list-style: none;
}

.Toastify__toast--error, .Toastify__toast-body svg {
  border-radius: ${(props) => props.theme.border.radius};
  fill: ${(props) => props.theme.colors.modalErrorColor};
  font-family: inherit;
  font-weight: inherit;
  background-color: ${(props) => props.theme.fonts.colors.dark};
}


`;

export default GlobalStyles;
