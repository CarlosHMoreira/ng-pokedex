import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    PokemonListComponent,
  ]
})
export class ContainersModule { }
