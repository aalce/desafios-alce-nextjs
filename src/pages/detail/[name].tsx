import { useRouter } from "next/router";
import styles from "../../../styles/Detail.module.css";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import { faMeteor, faShield, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



type Pokemon = {
  id: number;
  name: string;
  image: string;
  ability1: string;
  ability2: string;
  hp: number;
  attack: number;
  defense: number;
};

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export default function Pokemon() {
  const router = useRouter();
  const { name } = router.query;
  const [detailPokemon, setDetailPokemon] = useState({
    name: "",
    image: "",
    ability1: {
      name: "",
    },
    ability2: {
      name: "",
    },
    attack: 0,
    defense: 0,
    hp: 0,
  });
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/pokemon/detail/${name}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setDetailPokemon(data);
    }
  }, [data, detailPokemon]);

  if (error) return (<p>Erro!</p>)
  if (!data) return (<p>Loading!</p>)

  return (
    <>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image src={detailPokemon.image} width={200} height={200} alt={detailPokemon.name}/>
          </div>
          <h1 className={styles.title}>{detailPokemon.name}</h1>
          <div className={styles.details}>
            <div className={styles.ability}>
              Habilidade Principal: {detailPokemon.ability1.name}
            </div>
            <div className={styles.ability}>
              Habilidade Secundária: {detailPokemon.ability2.name}
            </div>
          </div>
          <div className={styles.status}>
            <div className={styles.item}>
              <FontAwesomeIcon icon={faMeteor} /> {detailPokemon?.attack}
              </div>
            <div className={styles.item}>
              <FontAwesomeIcon icon={faShield} /> {detailPokemon?.defense}
            </div>
            <div className={styles.item}>
              <FontAwesomeIcon icon={faHeart} /> {detailPokemon?.hp}
              </div>
          </div>
        </div>
      </main>
    </>
  );
}
