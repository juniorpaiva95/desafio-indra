import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    PokeListComponent,
    PokeDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PokemonRoutingModule,
    SharedModule,
    ChartsModule
  ],
  exports: [
    PokeListComponent
  ]
})
export class PokemonModule { }
