import { IBM_Plex_Mono, VT323 } from "next/font/google";

export const mainFont = VT323({ subsets: ["latin"], weight: "400" });

export const secondaryFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
});
