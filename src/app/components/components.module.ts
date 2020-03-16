import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    ListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
    ListComponent,
  ]
})
export class ComponentsModule { }
