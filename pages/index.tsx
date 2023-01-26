import { BASE_URL } from "@/constants"
import Link from "next/link"

function Home({ countries }: any) {
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

export async function getStaticProps() {
  const res = await fetch(`${BASE_URL}all`)
  const countries = await res.json()

  if (!countries) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      countries,
    },
  }
}

export default Home
