import React from "react"
import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"
import { Country } from "@/types"

const Container = styled.div`
  font-size: 1.5em;
  box-shadow: 0 0 4px 2px rgb(231, 231, 231);
  margin: 0.8rem;
`

const ContentCardContainer = styled.div`
  padding: 5px 15px;
  a,
  span {
    color: hsl(0, 0%, 52%);
  }
`

const CountryItem = ({ country }: Country) => {
  const { name, population, region, flags, cca3 } = country
  return (
    <Container>
      <Image src={flags.png} width={400} height={200} alt={`${name} flag`} />
      <ContentCardContainer>
        <Link href={`/countries/${cca3}`}>{name.common}</Link>
      </ContentCardContainer>
    </Container>
  )
}

export default CountryItem
