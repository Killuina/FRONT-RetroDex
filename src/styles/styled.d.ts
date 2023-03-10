import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainColor: string;
      headerColor: string;
      buttonColor: string;
      disabledButtonColor: string;
      inputColor: string;
      modalErrorColor: string;
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
        dark: string;
      };
    };
    border: {
      radius: string;
    };
    paddings: {
      medium: string;
    };
  }
}
