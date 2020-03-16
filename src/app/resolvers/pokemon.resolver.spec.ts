import { TestBed } from '@angular/core/testing';

import { PokemonResolver } from './pokemon.resolver';

describe('Pokemon.ResolverService', () => {
  let service: PokemonResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
