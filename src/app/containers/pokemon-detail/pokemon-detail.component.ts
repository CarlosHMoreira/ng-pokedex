import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDTO, PokemonPhotos } from 'src/app/models/poke-api.model';

@Component({
  selector: 'pkx-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonDTO;
  showShiny = false;
  isFemale = false;
  pokemonPhotos: PokemonPhotos;
  showPhotoBack = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemon = this.route.snapshot.data.pokemon as PokemonDTO;
    this.updatePhoto();
  }

  updatePhoto() {
    this.pokemonPhotos = this.resolvePhoto();
  }

  toggleShowPhotoBack() {
    this.showPhotoBack = !this.showPhotoBack;
  }

  private resolvePhoto() {
    const { sprites: {
       back_default,
       front_default,
       back_shiny,
       front_shiny,
       back_female,
       front_female,
       back_shiny_female,
       front_shiny_female,
    } } = this.pokemon;

    if (this.isFemale && this.showShiny) {
      return {
        back: back_shiny_female || back_female ||  back_shiny || back_female,
        front: front_shiny_female || front_female || front_shiny || back_female,
      } as PokemonPhotos;
    }

    if (this.isFemale) {
      return {
        back:  back_female || back_default,
        front: front_female || front_default,
      } as PokemonPhotos;
    }

    if (this.showShiny) {
      return {
        back: back_shiny || back_default,
        front: front_shiny || front_default,
      } as PokemonPhotos;
    }

    return {
      back:  back_default,
      front: front_default,
    } as PokemonPhotos;
  }
}
