import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  capitalize,
  displayPokemonNumber,
  convertToKg,
  addPointBeforeLastDigit,
} from "@/src/utils";
import goBackArrowIcon from "../../assets/go-back-arrow.svg";
import { PokemonId } from "@/src/styles/pages/home";
import {
  ContentWrapper,
  PokemonBaseStats,
  PokemonBaseStatsTitle,
  PokemonDetails,
  PokemonDetailsContainer,
  PokemonDetailsHeader,
  PokemonInfo,
  PokemonInfoContent,
  PokemonInfoLabel,
  PokemonTitle,
} from "@/src/styles/pages/pokemon";

const Pokemon: React.FC = (
  pokemonData: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { isFallback } = useRouter();
  const pokemon = pokemonData.pokemonData;

  if (isFallback) {
    return <div>Loading..</div>;
  }

  const typeNames = pokemon.types.map((type) => capitalize(type.type.name));
  const typeNamesDisplay = `${typeNames.join(" / ")}`;

  return (
    <>
      <Head>
        <title>
          Pokemon |{" "}
          {pokemon?.name ? capitalize(pokemon.name) : "Pokemon Details"}
        </title>
      </Head>
      <PokemonDetailsContainer>
        <PokemonDetails>
          <PokemonDetailsHeader>
            <Link href="/">
              <Image src={goBackArrowIcon.src} alt="" width={25} height={25} />
            </Link>

            {pokemon.id >= 905 ? (
              <Image
                src={pokemon.sprites.front_default}
                width={250}
                height={250}
                alt={pokemon.name}
              />
            ) : (
              <Image
                src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${displayPokemonNumber(
                  pokemon.id
                )}.png`}
                width={250}
                height={250}
                alt={pokemon.name}
              />
            )}
          </PokemonDetailsHeader>

          <ContentWrapper>
            <PokemonInfo>
              <PokemonDetailsHeader>
                <PokemonTitle className="pokemon-name">
                  {capitalize(pokemon.name)}
                </PokemonTitle>
                <PokemonId>#{displayPokemonNumber(pokemon.id)}</PokemonId>
              </PokemonDetailsHeader>

              <PokemonInfoContent>
                <li>
                  {typeNamesDisplay}
                  <br />
                  <span>Type</span>
                </li>
                <li>
                  {addPointBeforeLastDigit(pokemon.weight)}kg
                  <br />
                  <span>Weight</span>
                </li>
                <li>
                  {addPointBeforeLastDigit(pokemon.height)}m
                  <br />
                  <span>Height</span>
                </li>
              </PokemonInfoContent>
            </PokemonInfo>
          </ContentWrapper>
        </PokemonDetails>
      </PokemonDetailsContainer>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const pokemonId = params?.id;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  const pokemonData = await response.json();

  return {
    props: {
      pokemonData,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};

export default Pokemon;
