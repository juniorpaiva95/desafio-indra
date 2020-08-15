export interface Pokemon {
    name: string;
    sprites: { front_default: string };
    id: number;
    weight: number;
    height: number;
    base_experience: number;
    types: Type[];
}

export interface Type {
    slot: number;
    type: { name: string, url: string };
}