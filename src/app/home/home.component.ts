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
  availableSearchFields: string[] = ['name', 'weight'];

  constructor(private fb: FormBuilder, private pokeService: PokeService) {
    this.form = this.fb.group({
      'name': this.fb.control('', Validators.required),
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
    
    const searchText = item => {
      console.log(item);

      for(let key in item) {
        if(typeof item[key] === 'string' || typeof item[key] === 'number') {
          // console.log(availableSearchFields, key)
          if(this.availableSearchFields.includes(key)) {
            // console.log("Campo pesquisavel");
            if(item[key].toString().toUpperCase().indexOf(name.toString().toUpperCase()) !== -1) {
              return true;
            }
          }
        }
        
      }
    }

    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => searchText(pokemon));
    // this.pokeService.getPokemonByName(name).subscribe((data: Pokemon) => {
    //   this.pokemons = [data];
    // });
  }

}
