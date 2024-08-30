import { breakpoints, fonts, mediaQueries, fontWeight } from "./base";
import { colors } from "./colors";

export type MediaQueries = typeof mediaQueries;

export type Breakpoints = typeof breakpoints;

export type Colors = typeof colors;

export type FontWeight = typeof fontWeight;

export type Fonts = typeof fonts;

export interface CustomTheme {
  siteWidth: number;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  fontWeight: FontWeight;
  fonts: Fonts;
  colors: Colors;
}
