import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PokeService } from 'src/app/shared/services/poke-service.service';
import { Pokemon } from '../shared/interfaces/pokemon.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  meta: { count: number, next: string | null, previous: string | null };
  pokemons: Pokemon[] = [];
  pokemonsCopy: Pokemon[] = [];

  constructor(private fb: FormBuilder, private pokeService: PokeService) {
    this.form = this.fb.group({
      'name': this.fb.control('', Validators.required),
      'weight': this.fb.control('')
    })
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(nextUrl?: string) {

    this.pokeService.getPokemon(nextUrl).subscribe(({ meta, data }: any) => {
      this.meta = meta;
      this.pokemons.push(...data);
      this.pokemonsCopy = this.pokemons;
    });
  }

  search() {
    const { name } = this.form.value;

    if(!name) {
      return this.pokemons = this.pokemonsCopy;
    }
    const searchText = (item) => {
      for (let key in item) {
        console.log(item, key)
        if (item[key] == null) {
          continue;
        }
        // console.log(item, key);
        if (item[key].toString().toUpperCase().indexOf(name.toString().toUpperCase()) !== -1) {
          return true;
        }
      }
    };
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => searchText(pokemon));
    // this.pokeService.getPokemonByName(name).subscribe((data: Pokemon) => {
    //   this.pokemons = [data];
    // });
  }

}
