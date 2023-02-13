import { Pokemon } from "../types";
import { InferGetStaticPropsType } from "next";
import {
  FilterInput,
  HomeContainer,
  OptionsContainer,
  PokemonContainer,
  PokemonId,
  PokemonListContainer,
} from "../styles/pages/home";
import { capitalize, displayPokemonNumber } from "../utils";
import Image from "next/image";
import { useState } from "react";

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1008");

  const { results } = await res.json();

  const pokemonData: Pokemon[] = [];

  results.forEach((pokemon: Pokemon, index: number) => {
    pokemonData.push({
      ...pokemon,
      id: index + 1,
      name: pokemon.name,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    });
  });

  return {
    props: {
      pokemonData,
    },
  };
}

export default function Home({
  pokemonData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <HomeContainer>
      <OptionsContainer>
        <FilterInput
          placeholder="Search by name or number"
          onChange={handleSearchChange}
        />
      </OptionsContainer>
      <PokemonListContainer>
        {pokemonData.map(
          (pokemon: Pokemon) =>
            (pokemon.name.includes(filter) ||
              pokemon.id.toString().includes(filter)) && (
              <PokemonContainer key={pokemon.name}>
                <PokemonId>{displayPokemonNumber(pokemon.id)}</PokemonId>
                <Image src={pokemon.sprite} width={96} height={96} alt={""} />
                {capitalize(pokemon.name)}
              </PokemonContainer>
            )
        )}
      </PokemonListContainer>
    </HomeContainer>
  );
}
