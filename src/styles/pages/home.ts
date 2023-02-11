import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  "@bp2": {},
  "@bp3": {
    flexDirection: "row",
  },
  maxWidth: 1100,
  gap: "2rem",
  margin: "0 auto",
});

export const OptionsContainer = styled("div", {
  borderRadius: 5,
  backgroundColor: "green",
});

export const PokemonListContainer = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "red",
  margin: "0 2rem",
});

export const PokemonCard = styled("a", {
  display: "flex",
  gap: "2rem",
  alignItems: "center",
  backgroundColor: "white",
  width: "100%",
  "&:hover": {
    backgroundColor: "#cdcdcd",
  },
  paddingLeft: "2rem",
});

export const PokemonId = styled("div", {
  backgroundColor: "#ebeceb",
  borderRadius: 15,
  padding: "3px 6px",
});
