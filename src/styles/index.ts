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
  theme: {
    colors: {
      white: "#FFF",

      red500: "#a10300",
      red300: "#c32027",

      gray900: "#121214",
      gray800: "#202024",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",
    },
  },
});
