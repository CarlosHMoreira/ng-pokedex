import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';



@NgModule({
  declarations: [HeaderComponent, LayoutComponent, ListComponent, ListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
  ]
})
export class ComponentsModule { }
