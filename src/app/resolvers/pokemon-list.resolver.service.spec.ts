import { TestBed } from '@angular/core/testing';

import { PokemonList.ResolverService } from './pokemon-list.resolver.service';

describe('PokemonList.ResolverService', () => {
  let service: PokemonList.ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonList.ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
