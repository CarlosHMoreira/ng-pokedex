import { Component, OnInit, Input } from '@angular/core';
import { PokemonDTO } from 'src/app/models/poke-api.model';

@Component({
  selector: 'pkx-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  @Input() pokemon: PokemonDTO;
  constructor() { }

  ngOnInit(): void {
    console.log(this.pokemon);

  }

}
