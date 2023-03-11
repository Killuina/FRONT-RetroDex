import { DefaultTheme } from "styled-components";

export const mainTheme: DefaultTheme = {
  colors: {
    mainColor: "#FFFDF0",
    headerColor: "#F1ECC9",
    buttonColor: "#4D4DA7",
    disabledButtonColor: "#434378",
    inputColor: "#FFF",
    modalErrorColor: "#EE7078",
    modalSucessColor: "#C6F6D5",
  },
  fonts: {
    mainFont: "'VT323', monospace",
    secondaryFont: "'IBM Plex Mono', monospace",
    sizes: {
      bigSize: "2.5rem",
      pokemonNameSize: "1.875rem",
      pokemonDescriptionSize: "1.563rem",
      textSize: "1.25rem",
    },
    weights: {
      bold: "700",
      semiBold: "600",
      medium: "500",
    },
    colors: {
      white: "#FFF",
      dark: "#2D3748",
    },
  },
  border: {
    radius: "0.625rem",
  },
  paddings: {
    medium: "1.875rem",
  },
};
