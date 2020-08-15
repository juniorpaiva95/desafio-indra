import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeService } from 'src/app/shared/services/poke-service.service';
import { Pokemon } from 'src/app/shared/interfaces/pokemon.interface';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {

  id: string;
  pokemon: Pokemon;

  constructor(private activatedRoute: ActivatedRoute, private pokeService: PokeService, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.pokeService.getPokemonByNameOrId(this.id).subscribe((pokemon) => this.pokemon = pokemon);
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
