import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import styles from './pokemon.module.css'
import { ParsedUrlQuery } from 'querystring'
import arrow from '../../public/assets/arrow-left.svg'
import api from '@/services/api';

type Pokemon = {
    id: number
    name: string
    types: [
        {
            type: {
                name: string
            }
        }
    ],
    height: number
    weight: number
}

interface PokemonProps {
    pokemon: Pokemon
}

export default function Pokemon({ pokemon }: PokemonProps) {

    return (
        <div className={styles.pokemon_wrapper}>
            <Link href='/' className={styles.arrow_left_icon}>
                <Image
                    src={arrow}
                    width={20}
                    alt='Voltar'
                    title='Voltar'
                />
            </Link>
            <Image
                className={styles.card_image}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`}
                width={150}
                height={150}
                alt={pokemon?.name}
            />
            <h2>{pokemon?.name}</h2>
            <div className={styles.pokemon_about_table}>
                <p>Habilidades</p>
                <div className={styles.pokemon_abilities}>
                    {pokemon?.types.map(({ type }) => (
                        <span key={type?.name}>{type?.name}</span>
                    ))}
                </div>
                <div className={styles.pokemon_specifications}>
                    Height <span>{pokemon?.height} m</span>
                    Weight  <span>{pokemon?.weight} kg</span>
                </div>
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const res = await api.get('/pokemon/');

    const paths = res.data.results.map((index: number) => ({

        params: { id: String(index + 1) },

    }))

    return {
        paths,
        fallback: true,
    }
}


export async function getStaticProps({ params }: { params: ParsedUrlQuery }) {

    const { id } = params as ParsedUrlQuery

    const { data } = await api.get(`/pokemon/${id}`);

    const pokemon = data

    return {
        props: {
            pokemon
        },
    };
}
