import React from "react"
import CountryItem from "../countryCard/CountryCard"
import styled from "styled-components"
import { Countries } from "@/types"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 30px;
`

const Homepage = ({ countries }: Countries) => {
  return (
    <GridContainer>
      {countries.map((country: any) => (
        <div key={country.cca3}>
          <CountryItem country={country} />
        </div>
      ))}
    </GridContainer>
  )
}

export default Homepage
