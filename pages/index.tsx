import Homepage from "@/components/homePage/Homepage"
import { BASE_URL } from "@/constants"
import Link from "next/link"

function Home({ countries }: any) {
  return <Homepage countries={countries} />
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
