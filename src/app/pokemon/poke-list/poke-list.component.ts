import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/shared/services/poke-service.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  meta: { count: number, next: string | null, previous: string | null };
  pokemons: any[] = [];

  constructor(private pokeService: PokeService) { }

  ngOnInit() {
    this.pokeService.getPokemon().subscribe(({ count, next, previous, results }: any) => {
      this.meta = { count, next, previous };
      this.pokemons = results;
    });
  }

}
