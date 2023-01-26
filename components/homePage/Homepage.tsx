import Link from "next/link"
import React from "react"

const Homepage = ({ countries }: any) => {
  return (
    <ul>
      {countries.map((country: any) => (
        <li key={country.id}>
          <Link href={`/countries/${country.cca3}`}>{country.name.common}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Homepage
