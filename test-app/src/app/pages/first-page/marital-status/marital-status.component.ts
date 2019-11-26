import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {untilDestroyed} from "ngx-take-until-destroy";

@Component({
  selector: 'app-marital-status',
  templateUrl: './marital-status.component.html',
  styleUrls: ['./marital-status.component.css']
})
export class MaritalStatusComponent implements OnInit, OnDestroy{

  statuses = [
    {value: '1', viewValue: 'Женат'},
    {value: '2', viewValue: 'Замужем'},
    {value: '3', viewValue: 'В разводе'},
    {value: '4', viewValue: 'Нет'}
  ];

  @Input() status: FormControl;

  @Input() form: FormGroup;

  ngOnInit(): void {
    this.form.get('gender').valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(data => {
      if (this.status.value === null) {
        return;
      }
      if (data === 'Мужской' && this.status.value === '2') {
        this.status.setValue(null)
      }
      if (data === 'Женский' && this.status.value === '1') {
        this.status.setValue(null)
      }
    })
  }

  ngOnDestroy(): void {
  }

  getStatuses() {
    const gender = this.form.get('gender').value;
    if (gender === 'Мужской') {
      return this.statuses.filter(item => item.value !== '2');
    } else if (gender === 'Женский') {
      return this.statuses.filter(item => item.value !== '1');
    } else {
      return this.statuses;
    }
  }

}
