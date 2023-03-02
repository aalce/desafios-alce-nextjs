import styles from '../../../styles/CardPokemon.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface ICardPokemonPros {
    pokemon: {
        id: number
        name: string,
        imageFront: string,
        imageBack: string,
    }
}

export const CardPokemon = ( { pokemon } : ICardPokemonPros) => {
    return (
        <Link className={styles.card} href={`/detail/${pokemon.name}`}>
            <div className={styles.image}>
                <Image
                    src={pokemon.imageFront}
                    width={80}
                    height={80}
                    alt={pokemon.name}
                    className={styles.imageFront}
                />
                <Image
                    src={pokemon.imageBack}
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