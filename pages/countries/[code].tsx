import DetailPage from "@/components/detailPage/DetailPage"
import { BASE_URL } from "@/constants"
import React from "react"

function Country({ country }: any) {
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
