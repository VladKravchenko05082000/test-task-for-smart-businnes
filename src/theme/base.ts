export const siteWidth = 1024;

export const breakpointMap = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
} as const;

export const breakpointsArray = Object.values(breakpointMap).map(item => `${item}px`);

export const breakpoints = Object.assign(breakpointsArray, {
  mobileS: breakpointsArray[0],
  mobileM: breakpointsArray[1],
  mobileL: breakpointsArray[2],
  tablet: breakpointsArray[3],
  laptop: breakpointsArray[4],
});

export const mediaQueries = {
  mobileS: `@media screen and (min-width: ${breakpointsArray[0]})`,
  mobileM: `@media screen and (min-width: ${breakpointsArray[1]})`,
  mobileL: `@media screen and (min-width: ${breakpointsArray[2]})`,
  tablet: `@media screen and (min-width: ${breakpointsArray[3]})`,
  laptop: `@media screen and (min-width: ${breakpointsArray[4]})`,
} as const;

export const fontWeight = {
  regular: 400,
  bold: 700,
} as const;

export const fonts = { spaceMono: "'Space Mono', Arial, serif" } as const;
