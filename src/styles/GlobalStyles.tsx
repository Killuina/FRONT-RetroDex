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
}

button {
  background-color: inherit;
  padding: 0;
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


a, :visited, :active{
text-decoration: none;
color: #000
}


.Toastify__toast {
  border-radius: ${(props) => props.theme.border.radius};
  color: ${(props) => props.theme.fonts.colors.dark};
  font-family: inherit;
  font-weight: ${(props) => props.theme.fonts.weights.semiBold};
  background-color: ${(props) => props.theme.colors.headerColor};
}


`;

export default GlobalStyles;
