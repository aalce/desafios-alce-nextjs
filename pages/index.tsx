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
  const res = await fetch("https://restcountries.com/v3.1/all")
  const countries = await res.json()

  return {
    props: {
      countries,
    },
  }
}

export default Home
