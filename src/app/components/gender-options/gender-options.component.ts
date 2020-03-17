import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Genders } from './gender.enum';

@Component({
  selector: 'pkx-gender-options',
  templateUrl: './gender-options.component.html',
  styleUrls: ['./gender-options.component.scss']
})
export class GenderOptionsComponent {
  @Input() gender: Genders;
  @Output() genderChange = new EventEmitter();

  emitChangeEvent(event: Event) {
    this.genderChange.emit(this.gender);
  }
}
