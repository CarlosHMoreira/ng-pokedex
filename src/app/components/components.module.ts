import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonPhotoComponent } from './pokemon-photo/pokemon-photo.component';
import { GenderOptionsComponent } from './gender-options/gender-options.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    ListComponent,
    PokemonInfoComponent,
    PokemonPhotoComponent,
    GenderOptionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    LayoutComponent,
    ListComponent,
    PokemonInfoComponent,
    PokemonPhotoComponent,
    GenderOptionsComponent,
  ]
})
export class ComponentsModule { }
