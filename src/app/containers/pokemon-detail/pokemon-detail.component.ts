import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDTO, PokemonPhotos } from 'src/app/models/poke-api.model';
import { Genders } from 'src/app/components/gender-options/gender.enum';

@Component({
  selector: 'pkx-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonDTO;
  showShiny = false;
  gender = Genders.male;
  pokemonPhotos: PokemonPhotos;
  showPhotoBack = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemon = this.route.snapshot.data.pokemon as PokemonDTO;
    this.updatePhoto();
  }

  toggleShowPhotoBack() {
    this.showPhotoBack = !this.showPhotoBack;
  }

  toogleShiny() {
    this.showShiny = !this.showShiny;
    this.updatePhoto();
  }

  hasShinyPhotoForGenderSelected() {
    const { sprites: {
      back_shiny,
      front_shiny,
      back_shiny_female,
      front_shiny_female,
   } } = this.pokemon;

    if (this.isFemale()) {
    return [
      back_shiny_female,
      front_shiny_female,
    ].some(photo => !!photo);
   }

    return [
      back_shiny,
      front_shiny,
    ].some(photo => !!photo);
  }

  updatePhoto() {
    console.log('update', this.gender, this.showShiny);

    this.pokemonPhotos = this.resolvePhoto();
  }

  private isFemale() {
    return this.gender === Genders.female;
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

    if (this.isFemale() && this.showShiny) {
      return {
        back: back_shiny_female || back_female ||  back_shiny || back_female,
        front: front_shiny_female || front_female || front_shiny || back_female,
      } as PokemonPhotos;
    }

    if (this.isFemale()) {
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
