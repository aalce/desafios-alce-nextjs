import { BASE_URL } from "@/constants"
import React from "react"

function Country({ country }: any) {
  return (
    <div>
      <p>{country[0].name.common}</p>
      <p>{country[0].name.official}</p>
    </div>
  )
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
