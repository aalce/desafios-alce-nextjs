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
  paddingTop: 15,
  borderRadius: 5,
  minWidth: 240,
});

export const FilterInput = styled("input", {
  color: "rgba(0, 0, 0, 0.87)",
  border: "none",
  borderBottom: "1px solid rgba(0, 0, 0, 0.26)",
  outline: "none",
  width: "100%",
  padding: 0,
  borderRadius: 0,
  fontSize: 16,
  "&:focus": {
    borderColor: "#2196F3",
    borderWidth: 2,
  },
});

export const PokemonListContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  margin: "0 2rem",
  "@bp3": {
    width: 764,
  },
});

export const PokemonContainer = styled("div", {
  display: "flex",
  gap: "2rem",
  alignItems: "center",
  backgroundColor: "white",
  width: "100%",
  "&:hover": {
    backgroundColor: "#cdcdcd",
  },
  paddingLeft: "2rem",
  color: "$gray800",
});

export const PokemonId = styled("div", {
  backgroundColor: "#ebeceb",
  borderRadius: 15,
  padding: "3px 6px",
});
