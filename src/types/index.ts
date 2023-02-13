export default interface PokemonInfo {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprite: string;
}

export default interface PokemonType {
  slot: number;
  type: string;
}

export default interface PokemonStat {
  stat: {
    name: string;
    url: string;
  };
  effort: number;
  base_stat: number;
}
