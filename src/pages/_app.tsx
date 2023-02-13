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
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <Link href="/">
            <Image
              src={logoImg.src}
              alt=""
              width={logoImg.width}
              height={logoImg.height}
            />
          </Link>
        </HeaderContainer>
      </Header>
      <ContentContainer>
        <Component {...pageProps} />
      </ContentContainer>
    </Container>
  );
}
