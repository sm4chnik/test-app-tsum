import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-children-count',
  templateUrl: './children-count.component.html',
  styleUrls: ['./children-count.component.css']
})
export class ChildrenCountComponent {

  @Input() childrenCount : FormControl;

  constructor() {}

  changeCount(num: number) {
    let value = this.childrenCount.value + num;
    if (value < 0) {
      this.childrenCount.setValue(0);
    } else {
      this.childrenCount.setValue(value);
    }
  }
}
