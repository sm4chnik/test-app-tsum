import { Component, Input } from '@angular/core';
import {TsumService} from "../../../services/tsum.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent {

  @Input() gender: FormControl;

  constructor(private tsumService: TsumService) { }

  radioChange(e) {
    this.tsumService.set('gender', e.value);
  }

}
