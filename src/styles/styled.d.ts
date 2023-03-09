import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainColor: string;
      headerColor: string;
      buttonColor: string;
    };
    fonts: {
      mainFont: string;
      secondaryFont: string;
      sizes: {
        bigSize: string;
        textSize: string;
        pokemonNameSize: string;
        pokemonDescriptionSize: string;
      };
      weights: {
        bold: string;
        semiBold: string;
        medium: string;
      };
      colors: {
        white: string;
        black: string;
      };
    };
  }
}
