import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  @Input() pokemons: Array<any>;

  constructor() { }

  ngOnInit() { }

}
