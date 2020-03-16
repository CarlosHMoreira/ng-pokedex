import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NameUrlDTO } from 'src/app/models/poke-api.model';

@Component({
  selector: 'pkx-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemonList: NameUrlDTO[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonList = this.route.snapshot.data.pokemonList.results;
  }

}
