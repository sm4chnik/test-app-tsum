import {Component, Input} from '@angular/core';
import {TsumService} from "../../../services/tsum.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent {

  date: Date;

  @Input() birthday: FormControl;

  constructor(private tsumService: TsumService) { }

  changeDate(d) {
    if (d > new Date()){
      alert('Дата рождения не может быть больше сегодня');
      this.date = new Date();
    } else {
      this.tsumService.set('birthday', d);
      this.birthday.setValue(d);
    }
  }
}
