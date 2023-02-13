import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: "white",
    color: "$primary",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Open Sans",
    fontWeight: 400,
  },
});
