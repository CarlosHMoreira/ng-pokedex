import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ListApiResponse } from '../models/poke-api.model';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonListResolver implements Resolve<ListApiResponse> {
  constructor(private pokemonService: PokemonService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): ListApiResponse | Observable<ListApiResponse> | Promise<ListApiResponse> {
    return this.pokemonService.getAll();
  }
}
