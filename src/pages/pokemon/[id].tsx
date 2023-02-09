import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const Pokemon = () => {
  const { query } = useRouter();

  return <h1>Pokemon {JSON.stringify(query)}</h1>;
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { pokemonId } = query;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
  };
};

export default Pokemon;
