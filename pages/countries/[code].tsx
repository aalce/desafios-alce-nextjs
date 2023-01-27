import DetailPage from "@/components/detailPage/DetailPage"
import { BASE_URL } from "@/constants"
import { CountryDetails } from "@/types"
import React from "react"

interface Props {
  country: CountryDetails[]
}

function Country({ country }: Props) {
  return <DetailPage country={country} />
}

export async function getServerSideProps({ query }: any) {
  const { code } = query
  const res = await fetch(`${BASE_URL}alpha/${code}`)
  const country = await res.json()

  if (!country) {
    return {
      notFound: true,
    }
  }

  return { props: { country } }
}

export default Country
