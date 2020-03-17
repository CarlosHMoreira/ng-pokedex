import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NameUrlDTO } from 'src/app/models/poke-api.model';
import { PokemonService } from 'src/app/pokemon.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'pkx-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public listSubject$ = new BehaviorSubject<NameUrlDTO[]>(null);
  public pokemonList$ = this.listSubject$.asObservable();

  offset = 0;
  limit = 20;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    const { results } = this.route.snapshot.data.pokemonList;
    this.listSubject$.next(results);
  }

  backPage() {
    const result = this.offset - this.limit;
    this.offset = result < 0 ? 0 : result;
    this.updateList();
  }

  nextPage() {
    this.offset = this.offset + this.limit;
    this.updateList();
  }

  private updateList() {
    this.pokemonService
      .getAll(this.offset)
      .subscribe(({ results }) => this.listSubject$.next(results));
  }
}
