import { Component, Input } from '@angular/core';
import { NameUrlDTO } from '../../../models/poke-api.model';

@Component({
  selector: 'pkx-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() data: NameUrlDTO;
  constructor() { }
}
