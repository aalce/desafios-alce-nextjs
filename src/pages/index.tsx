import { Pokemon } from "../types/pokemon";

export default function Home(pokemons) {
  return (
    <ul>
      {pokemons.pokemons.results.map((pokemon: Pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemons = await res.json();

  return {
    props: {
      pokemons,
    },
  };
}
