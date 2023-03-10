import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: inherit;
  font-family: inherit;
  font-size: inherit;
}

input {
  outline: none;
  background-color: none;
}

ul, li, ol {
list-style: none;
}
`;

export default GlobalStyles;
