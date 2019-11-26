import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-fio',
  templateUrl: './fio.component.html',
  styleUrls: ['./fio.component.css']
})
export class FioComponent {

  @Input() fioFormControl: FormControl;

  @Input() viewError: boolean;

  needView(): boolean {
    const {fioFormControl} = this;
    if (!fioFormControl.errors) {
      return false;
    }
    return this.viewError
  }
}
