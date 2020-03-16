import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ComponentsModule } from '../components/components.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';



@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
})
export class ContainersModule { }
