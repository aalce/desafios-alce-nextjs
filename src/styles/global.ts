import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: "white",
    color: "$gray800",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});
