import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonPhotoComponent } from './pokemon-photo/pokemon-photo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    ListComponent,
    PokemonInfoComponent,
    PokemonPhotoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent,
    ListComponent,
    PokemonInfoComponent,
    PokemonPhotoComponent,
  ]
})
export class ComponentsModule { }
