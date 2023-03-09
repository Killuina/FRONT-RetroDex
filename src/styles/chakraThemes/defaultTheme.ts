import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const defaultTheme = extendTheme(
  {
    colors: {
      primary: {
        100: "#FFFDF0",
        500: "#4D4DA7",
      },
    },
    fonts: {
      form: "'IBM Plex Mono', monospace",
      main: "'VT323', monospace",
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  })
);
