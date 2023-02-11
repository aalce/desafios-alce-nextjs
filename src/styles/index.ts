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

      red500: "#a10300",
      red300: "#c32027",

      gray900: "#121214",
      gray800: "#202024",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",
    },
  },
});
