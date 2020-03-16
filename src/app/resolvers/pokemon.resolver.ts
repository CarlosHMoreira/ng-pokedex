import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonService } from '../pokemon.service';
import { PokemonDTO } from '../models/poke-api.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver {
  constructor(private pokemonService: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot): PokemonDTO | Observable<PokemonDTO> | Promise<PokemonDTO> {
    const { name } = route.params;
    return this.pokemonService.find(name);
  }
}
