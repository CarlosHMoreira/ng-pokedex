import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './containers/pokemon-detail/pokemon-detail.component';
import { PokemonListResolver } from './resolvers/pokemon-list.resolver';
import { PokemonResolver } from './resolvers/pokemon.resolver';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PokemonListComponent,
    resolve: { pokemonList: PokemonListResolver },
  },
  {
    path: 'pokemon/:name',
    component: PokemonDetailComponent,
    resolve: { pokemon: PokemonResolver },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
