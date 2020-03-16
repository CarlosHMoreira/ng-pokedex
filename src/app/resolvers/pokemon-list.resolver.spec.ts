import { TestBed } from '@angular/core/testing';

import { PokemonListResolver } from './pokemon-list.resolver';

describe('PokemonList.ResolverService', () => {
  let service: PokemonListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonListResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
