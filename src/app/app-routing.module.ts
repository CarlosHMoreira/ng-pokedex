import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';
import { PokemonListResolver } from './resolvers/pokemon-list.resolver.service';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PokemonListComponent,
    resolve: { pokemonList: PokemonListResolver },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
