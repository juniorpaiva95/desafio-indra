import { Routes, RouterModule } from "@angular/router";
import { PokeListComponent } from './poke-list/poke-list.component';
import { NgModule } from '@angular/core';
import { PokeDefailtComponent } from './poke-defailt/poke-defailt.component';

const routes: Routes = [
    {
        path: 'pokemons',
        component: PokeListComponent
    },
    {
        path: 'pokemon/:id',
        component: PokeDefailtComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule {}