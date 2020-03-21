import { Component, Input } from '@angular/core';
import { PokemonDTO } from 'src/app/models/poke-api.model';

@Component({
  selector: 'pkx-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent {

  @Input() pokemon: PokemonDTO;
}
