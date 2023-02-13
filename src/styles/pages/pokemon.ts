import { styled } from "..";
import grass from "../../assets/types-background/grass.png";

export const PokemonDetailsContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 1100,
  gap: "2rem",
  margin: "0 auto",
  padding: "2rem 0",
});

export const PokemonDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const PokemonDetailsHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
});

export const ContentWrapper = styled("div", {
  position: "relative",
  width: "65%",
  margin: "15px auto",
  padding: "25px 15px",
  color: "$primary",
  background: "#f2f2f2",
  borderRadius: 8,
  zIndex: 2,
});

export const PokemonInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const PokemonTitle = styled("h1", {
  color: "$tealGreen",
});

export const PokemonInfoContent = styled("ul", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  margin: 0,
  padding: 0,
  borderBottom: "1px solid #ccc",
  listStyleType: "none",
  alignItems: "center",
  "&:after": {
    display: "table",
    clear: "both",
    content: " ",
  },
  li: {
    display: "block",
    float: "left",
    margin: "10px 0",
    padding: "0 5rem",
    fontSize: ".85em",
    fontWeight: 600,
    textAlign: "center",
    borderRight: "1px solid #ccc",
    "&:lastChild": {
      borderRight: "1px solid #ccc",
    },
    span: {
      color: "$muted",
      fontSize: ".75em",
    },
  },
});

export const PokemonInfoLabel = styled("strong", {
  color: "$gray800",
});

export const PokemonBaseStats = styled("div", {
  color: "$gray800",
});

export const PokemonBaseStatsTitle = styled("h2", {
  color: "$gray800",
});
