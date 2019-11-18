import {Component, Input} from '@angular/core';
import {TsumService} from "../../../services/tsum.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-marital-status',
  templateUrl: './marital-status.component.html',
  styleUrls: ['./marital-status.component.css']
})
export class MaritalStatusComponent {

  statuses = [
    {value: '1', viewValue: 'Женат'},
    {value: '2', viewValue: 'Замужем'},
    {value: '3', viewValue: 'В разводе'},
    {value: '4', viewValue: 'Нет'}
  ];

  @Input() status: FormControl;
  constructor(private tsumService: TsumService) { }

  getStatuses() {
    if (this.tsumService.get('gender') === 'Мужской') {
      return this.statuses.filter(item => item.value !== '2');
    } else if (this.tsumService.get('gender') === 'Женский') {
      return this.statuses.filter(item => item.value !== '1');
    } else {
      return this.statuses;
    }
  }

  selectStatus(e) {
    this.tsumService.set('status', this.statuses.find(item => item.value === e.value).viewValue);
  }

}
