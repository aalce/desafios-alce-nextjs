import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const HeaderContainer = styled("header", {
  padding: "1rem 0",
  width: "100%",
  maxWidth: 1100,
  margin: "0 auto",
});

export const Header = styled("header", {
  backgroundColor: "$red300",
  width: "100%",
});
