export interface NameUrlDTO {
  name: string;
  url: string;
}

export interface ListApiResponse {
  count: number;
  next?: string;
  previous?: string;
  results: NameUrlDTO[];
}

export interface Ability {
  ability: NameUrlDTO;
  is_hidden: boolean;
  slot: number;
}

export interface GameIndice {
  game_index: number;
  version: NameUrlDTO;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NameUrlDTO;
  version_group: NameUrlDTO;
}

export interface Move {
  move: NameUrlDTO;
  version_group_details: VersionGroupDetail[];
}

export interface Sprites {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: NameUrlDTO;
}

export interface Type {
  slot: number;
  type: NameUrlDTO;
}

export interface PokemonDTO {
  abilities: Ability[];
  base_experience: number;
  forms: NameUrlDTO[];
  game_indices: GameIndice[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: NameUrlDTO;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
