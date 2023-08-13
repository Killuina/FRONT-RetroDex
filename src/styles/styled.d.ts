import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainColor: string;
      headerColor: string;
      accentColor: string;
      disabledButtonColor: string;
      inputColor: string;
      modalErrorColor: string;
      modalSucessColor: string;
      loaderBackGroundColor: string;
      textBorderColor: string;
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
      standard: string;
      medium: string;
    };
    margins: {
      standard: string;
    };
  }
}
