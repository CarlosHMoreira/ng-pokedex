import { Component, Input } from '@angular/core';
import { PokemonPhotos } from 'src/app/models/poke-api.model';

@Component({
  selector: 'pkx-pokemon-photo',
  templateUrl: './pokemon-photo.component.html',
  styleUrls: ['./pokemon-photo.component.scss']
})
export class PokemonPhotoComponent {
  @Input() showBack = false;
  @Input() photos: PokemonPhotos;
  @Input() pokemonName = 'pokemon';
}
