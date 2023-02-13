import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { capitalize } from "@/src/utils";
import goBackArrowIcon from "../../assets/go-back-arrow.svg";

const Pokemon: React.FC = (
  pokemonData: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { isFallback } = useRouter();
  const pokemon = pokemonData.pokemonData;

  if (isFallback) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <Head>
        <title>
          Pokemon |{" "}
          {pokemon?.name ? capitalize(pokemon.name) : "Pokemon Details"}
        </title>
      </Head>
      <div>
        <div className="pokemon-details">
          <div className="pokemon-details-header">
            <div>
              <Link href="/">
                <Image
                  src={goBackArrowIcon.src}
                  alt=""
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>

          <div>
            <div className="layout-content-wrapper">
              <Image
                src={pokemon.sprites.front_default}
                width={96}
                height={96}
                alt={pokemon.name}
              />
              <div className="pokemon-info">
                <div className="pokemon-name">{capitalize(pokemon.name)}</div>
                <div className="pokemon-height">
                  <strong>Height:</strong> {pokemon.height}
                </div>
                <div className="pokemon-weight">
                  <strong>Weight:</strong> {pokemon.weight}
                </div>
                <div className="pokemon-types">
                  <strong>Types:</strong>
                  {pokemon.types.map((pokemonType: PokemonType) => (
                    <div key={pokemonType.slot}>{pokemonType.type.name}</div>
                  ))}
                </div>
              </div>
              <div>
                <div>
                  Base Stats
                  <ul>
                    {pokemon.stats.map((pokemonStat: PokemonStat) => {
                      const value = pokemonStat.base_stat;
                      const name = pokemonStat.stat.name;

                      return (
                        <li key={name}>
                          <strong>{name}:</strong>
                          <span>{value}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
