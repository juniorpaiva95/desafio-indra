import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { PokeService } from 'src/app/shared/services/poke-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  form: FormGroup;
  meta: { count: number, next: string | null, previous: string | null };
  pokemons: Pokemon[] = [];
  pokemonsCopy: Pokemon[] = [];
  availableSearchFields: string[] = ['name', 'weight'];

  btnTopShow: boolean = false;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.debug('[scroll]', scrollPosition);

    if (scrollPosition >= 100) {
      this.btnTopShow = true;
    } else {
      this.btnTopShow = false;
    }
  }

  constructor(private fb: FormBuilder, private pokeService: PokeService, private router: Router) {
    this.form = this.fb.group({
      'name': this.fb.control('', Validators.required),
    })
  }

  ngOnInit() {
    this.loadData();
  }

  /**
   * @description Emite um evento para o componente pai da próxima url a ser carregada.
   * @memberof PokeListComponent
   */
  handlerShowMore() {
    this.loadData(this.meta.next);
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
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
    // Reset state initial
    this.pokemons = this.pokemonsCopy;

    const searchText = item => {
      for (let key in item) {
        if (typeof item[key] === 'string' || typeof item[key] === 'number') {
          if (this.availableSearchFields.includes(key)) {
            if (item[key].toString().toUpperCase().indexOf(name.toString().toUpperCase()) !== -1) {
              return true;
            }
          }
        }
      }
    }

    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => searchText(pokemon));
  }

  navigateToDetail(pokemon: Pokemon) {
    console.log(`Navegar para ${pokemon.id}`);
    this.router.navigate([`/pokemon/${pokemon.id}`]);
  }

}
