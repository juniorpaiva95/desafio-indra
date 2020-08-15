import { Routes, RouterModule } from "@angular/router";
import { PokeListComponent } from './poke-list/poke-list.component';
import { NgModule } from '@angular/core';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';

const routes: Routes = [
    {
        path: 'pokemons',
        component: PokeListComponent
    },
    {
        path: 'pokemon/:id',
        component: PokeDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule {}