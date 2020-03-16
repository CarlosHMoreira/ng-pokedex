import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDTO } from 'src/app/models/poke-api.model';

@Component({
  selector: 'pkx-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonDTO;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemon = this.route.snapshot.data.pokemon as PokemonDTO;
  }

}
