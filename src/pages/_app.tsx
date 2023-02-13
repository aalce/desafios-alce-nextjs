import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import Image from "next/image";
import {
  Container,
  ContentContainer,
  Header,
  HeaderContainer,
} from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <Image
            src={logoImg.src}
            alt=""
            width={logoImg.width}
            height={logoImg.height}
          />
        </HeaderContainer>
      </Header>
      <ContentContainer>
        <Component {...pageProps} />
      </ContentContainer>
    </Container>
  );
}
