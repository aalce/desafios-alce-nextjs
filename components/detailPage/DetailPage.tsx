import React from "react"
import styled from "styled-components"
import Image from "next/image"
import { CountryDetails } from "@/types"
interface DetailPageProps {
  country: CountryDetails[]
}

const Container = styled.div`
  font-size: 1.5em;
  margin: 0.8rem;
  display: flex;
`

const ContentCardContainer = styled.div`
  padding: 5px 15px;
  a,
  span {
    color: hsl(0, 0%, 52%);
  }
`

const DetailPage = ({ country }: DetailPageProps) => {
  return (
    <div>
      <Container>
        <Image
          src={country[0].flags.png}
          width={600}
          height={300}
          alt={`${country[0].name.common} flag`}
        />
        <ContentCardContainer>
          <h2>{country[0].name.common}</h2>
          <h3>{country[0].name.official}</h3>
          <p>
            Region: <span>{country[0].region}</span>
          </p>
          <p>
            Population: <span>{country[0].population}</span>
          </p>
        </ContentCardContainer>
      </Container>
    </div>
  )
}

export default DetailPage
