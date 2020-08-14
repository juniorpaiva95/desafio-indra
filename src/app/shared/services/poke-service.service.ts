import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { format } from 'url';

interface Response {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<any>;
}

@Injectable({
    providedIn: 'root'
})
export class PokeService {
    private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
    private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    constructor(private http: HttpClient) {

    }

    getPokemon(offset: number = 0, limit: number = 9) : Observable<any> {
        return this.http.get<Response>(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
            .pipe(
                map(data => {
                    let formatted = data.results.map((pokemon, idx) => {
                        const id: number = idx + offset + 1;
                        
                        return {
                            name: pokemon.name,
                            sprite: `${this.baseSpriteUrl}${id}.png`,
                            id
                        }
                    })
                    
                    data.results = formatted;
                    return data;
                })
            )
    }
}