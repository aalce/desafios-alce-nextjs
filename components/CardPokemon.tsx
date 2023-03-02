import styles from "../styles/CardPokemon.module.css";
import Image from "next/image";
import Link from "next/link";

interface ICardPokemonPros {
  pokemon: {
    name: string;
    url: string;
  };
}

export const CardPokemon = ({ pokemon }: ICardPokemonPros) => {
  const urlParts = pokemon.url.split("/");
  const pokemonId = urlParts[urlParts.length - 2];

  return (
    <Link className={styles.card} href={`/detail/${pokemon.name}`}>
      <div className={styles.image}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={80}
          height={80}
          alt={pokemon.name}
          className={styles.imageFront}
        />
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`}
          width={80}
          height={80}
          alt={pokemon.name}
          className={styles.imageBack}
        />
      </div>
      <div className={styles.name}>{pokemon.name}</div>
    </Link>
  );
};
