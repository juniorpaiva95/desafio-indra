import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PokeDefailtComponent } from './poke-defailt/poke-defailt.component';



@NgModule({
  declarations: [
    PokeListComponent,
    PokeDefailtComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PokemonRoutingModule,
    SharedModule
  ],
  exports: [
    PokeListComponent
  ]
})
export class PokemonModule { }
