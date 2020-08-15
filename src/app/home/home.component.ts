import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PokeService } from 'src/app/shared/services/poke-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  meta: { count: number, next: string | null, previous: string | null };
  pokemons: any[] = [];

  constructor(private fb: FormBuilder, private pokeService: PokeService) { 
    this.form = this.fb.group({
      'name': this.fb.control('')
    })
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const { name } = this.form.value;
    this.pokeService.getPokemon(name).subscribe(({ count, next, previous, results }: any) => {
      this.meta = { count, next, previous };
      this.pokemons = results;
    });
  }
  search(): void {
    this.loadData();
  }

}
