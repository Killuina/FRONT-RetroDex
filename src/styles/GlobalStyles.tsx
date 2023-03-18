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
  height: 100%;
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

h1, h2, h3 {
  font-weight: inherit;
}

input, select {
  width: 100%;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.inputColor};
  border: solid 1px;
      border-radius: ${(props) => props.theme.border.radius};
  font-weight: inherit;
  font-family: inherit;
  font-size: inherit;
}

ul, li, ol {
list-style: none;
padding: 0;
margin: 0;
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

.Water {
  border: solid #299CFF;
  background-color: #82C5FF;
}

.Ice {
  border: solid #45DEFF;
  background-color: #A6EFFF;

}

.Posion {
border: solid #9B5FC5;
  background-color: #C39FDC;

}

.Fairy {
  border: solid #FF22C4;
  background-color: #FF78DB;

}

.Grass {
  border: solid #4FDC4F;
  background-color: #9AEB9A;
}

.Fire {
  border: solid #FF3A22;
  background-color: #FF8779;
}

.Ground {
  border: solid #927966;
  background-color: #B29F90;
}

.Dragon {
  border: solid #6829FF;
  background-color: #A681FF;
}

.Electric {
  border: solid #DBDF3A;
  background-color: #E8EB83;
}

.Bug {
  border: solid #52B337;
  background-color: #79CF61;
}

.Dark {
  border: solid #898989;
  background-color: #B2B2B2;
}

.Fighting {
  border: solid #F57F31;
  background-color: #F9B385;
}

.Flying {
  border: solid #3B45FF;
  background-color: #999EFF;
}
.Ghost {
  border: solid #A23FCE;
  background-color:#C17FDE;
}

.Psychic {
  border: solid #E12485;
  background-color: #EA68AB;
}

.Rock {
  border: solid #956F4E;
  background-color: #B59171;
}

.Steel {
  border: solid #5976AC;
  background-color: #8DA1C6;
}

.Normal {
  border: solid #BBAF97;
  background-color: #E3DED4;
}

`;

export default GlobalStyles;
