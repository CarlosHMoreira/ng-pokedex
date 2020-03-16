import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ListApiResponse, NameUrlDTO } from '../../models/poke-api.model';

@Component({
  selector: 'pkx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: NameUrlDTO[];
  constructor() { }

  ngOnInit(): void {
  }
}
