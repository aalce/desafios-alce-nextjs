import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
  theme: {
    colors: {
      white: "#fcfcfc",
      primary: "#436a6b",
      muted: "#757575",

      red500: "#a10300",
      red300: "#c32027",
    },
  },
});
