export interface Pokemon {
    name: string;
    sprites: { front_default: string };
    id: number;
    weight: number;
    height: number;
    base_experience: number;
    types: Type[];
    stats: Stat[];
}

export interface Type {
    slot: number;
    type: { name: string, url: string };
}
export interface Stat {
    base_stat: number;
    effort: number;
    stat: { name: string, url: string };
}