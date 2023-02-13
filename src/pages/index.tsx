import PokemonInfo from "../types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
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
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1008");

  const { results } = await res.json();

  const pokemonData: PokemonInfo[] = [];

  results.forEach((pokemon: PokemonInfo, index: number) => {
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
};

const Home: React.FC = ({
  pokemonData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
          (pokemon: PokemonInfo) =>
            (pokemon.name.includes(filter) ||
              pokemon.id.toString().includes(filter)) && (
              <Link
                key={pokemon.id}
                href={`/pokemon/${pokemon.id}`}
                prefetch={false}
                style={{ textDecoration: "none" }}
              >
                <PokemonContainer>
                  <PokemonId>#{displayPokemonNumber(pokemon.id)}</PokemonId>
                  <Image src={pokemon.sprite} width={96} height={96} alt={""} />
                  {capitalize(pokemon.name)}
                </PokemonContainer>
              </Link>
            )
        )}
      </PokemonListContainer>
    </HomeContainer>
  );
};

export default Home;
