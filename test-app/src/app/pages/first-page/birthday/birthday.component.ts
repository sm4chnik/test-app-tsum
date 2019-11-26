import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent {

  @Input() birthday: FormControl;

  @Input() viewError: boolean;

  public max = new Date();

  constructor() { }

}
