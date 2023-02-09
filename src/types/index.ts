/*export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: Ability;
}

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
}

export interface PokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: Pokemon;
  sprites: PokemonFormSprites;
}

export interface PokemonStat {
  stat: 
}
*/
export interface PokemonFormSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}
