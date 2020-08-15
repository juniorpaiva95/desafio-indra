import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { PokeList } from '../interfaces/poke-list.interface';
import { Pokemon } from '../interfaces/pokemon.interface';

interface Response {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<PokeList>;
}

@Injectable({
    providedIn: 'root'
})
export class PokeService {
    private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';
    private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    constructor(private http: HttpClient) {

    }

    // resolveUrl(): string {
    //     return ``;
    // }

    getPokemonByName(name: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.baseUrl}/${name}`);
    }

    getPokemon(url?: string, name: string = '', offset: number = 0, limit: number = 21) : Observable<any> {
        let resolveUrl = url ? url: this.baseUrl;
        return this.http.get<Response>(`${resolveUrl}/${name}?limit=${limit}`)
            .pipe(
                map((response: Response) => {
                    let observables = [];
                    response.results.map((pokemon: PokeList) => observables.push(this.http.get(pokemon.url)));
                    return { observables: observables, meta: response };
                }),
                mergeMap(({ observables, meta }) => 
                    forkJoin(observables)
                    .pipe(
                        map((result) => {
                            let { results, ...rest } = meta;
                            
                            return { data: result, meta: rest };
                        })
                    )
                ),
            )
    }
}