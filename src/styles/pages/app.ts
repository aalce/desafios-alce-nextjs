import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
  paddingTop: 135,
});

export const HeaderContainer = styled("header", {
  padding: "1rem 0",
  maxWidth: 1100,
  margin: "0 auto",
});

export const Header = styled("header", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "$red300",
});

export const ContentContainer = styled("div", {
  paddingTop: 135,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
});
