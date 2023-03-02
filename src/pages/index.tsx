import Head from 'next/head'
import styles from '../../styles/Home.module.css'; 

import { useEffect, useState } from 'react';

import { CardPokemon } from '../components/CardPokemon';

type PokemonObj = {
  id: number
  name: string,
  imageFront: string,
  imageBack: string,
}

function Home() {
  const [listPokemon, setListPokemon] = useState([]);
  const [limit, setLimit] = useState(20);

  function loading(){
    setLimit(limit + 10);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/pokemon?limit=${limit}`);
      const {result} = await response.json();

      const list = result.map((item: PokemonObj, index: number) => {
        const id = (index + 1);
        return {
          id,
          name: item.name,
          imageFront: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
          imageBack: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
        }
      })

      setListPokemon(list);

    };
    fetchData();

  }, [limit]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          {listPokemon.map((pokemon: PokemonObj) => (
            <CardPokemon key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>

        <button className={styles.loading} onClick={loading}>Carregar mais...</button>
      </main>
    </>
  )
}

export default Home;
