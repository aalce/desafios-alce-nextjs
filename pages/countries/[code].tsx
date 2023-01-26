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
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
  const country = await res.json()

  return { props: { country } }
}

export default Country
