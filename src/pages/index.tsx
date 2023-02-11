import { Pokemon } from "../types";
import { styled } from ".../styles";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import {
  HomeContainer,
  OptionsContainer,
  PokemonCard,
  PokemonId,
  PokemonListContainer,
} from "../styles/pages/home";
import Image from "next/image";
import displayPokemonNumber, { capitalize } from "../utils";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=1008")
    .catch((error) => {
      console.log(error);
    });

  const { results } = res?.data;

  const pokemonsList: Pokemon[] = [];
  results.forEach((pokemon: Pokemon, index: number) => {
    pokemonsList.push({
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
      pokemonsList,
    },
  };
};

export default function Home({
  pokemonsList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <HomeContainer>
      <OptionsContainer>Teste</OptionsContainer>
      <PokemonListContainer>
        {pokemonsList.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.name}>
            <PokemonId>{displayPokemonNumber(pokemon.id)}</PokemonId>
            <Image src={pokemon.sprite} width={96} height={96} alt={""} />
            {capitalize(pokemon.name)}
          </PokemonCard>
        ))}
      </PokemonListContainer>
    </HomeContainer>
  );
}
