import { useRouter } from "next/router";
import styles from '../../../styles/Detail.module.css'
import { useEffect, useState } from "react";
import useSWR from 'swr'
import Image from 'next/image';

type Pokemon = {
    id: number,
    name: string,
    image: string,
    ability1: string,
    ability2: string,
    hp: number,
    attack: number,
    defense: number
}

const fetcher = (...args: any) => fetch(...args).then(res => res.json())

export default function pokemon() {
  const router = useRouter();
  const { name } = router.query;
  const [detailPokemon, setDetailPokemon] = useState(null);
  const { data, error, isLoading } = useSWR(`http://localhost:3000/api/pokemon/detail/${name}`, fetcher)

  console.log(data);

  useEffect(() => {
    if(data){
      setDetailPokemon(data);

      console.log(detailPokemon);
    }
  }, [data, router]);

  return(<>
      <main>
        <div className={styles.card}>
            <h1>{detailPokemon?.name}</h1>
            <div className={styles.image}>
        
            </div>
            <div className={styles.details}>
                <div className={styles.ability}>Habilidade Principal: {detailPokemon?.ability1}</div>
                <div className={styles.ability}>Habilidade Secundária: {detailPokemon?.ability2}</div>
            </div>
            <div className={styles.status}>
                <div className={styles.item}>
                    Ataque ({detailPokemon?.attack})
                </div>
                <div className={styles.item}>
                    Defessa ({detailPokemon?.defense})
                </div>
                <div className={styles.item}>
                    Vida ({detailPokemon?.hp})
                </div>
            </div>
        </div>
      </main> 
  </>);
}
