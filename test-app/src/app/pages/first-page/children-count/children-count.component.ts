import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {TsumService} from "../../../services/tsum.service";
import { untilDestroyed } from 'ngx-take-until-destroy';


@Component({
  selector: 'app-children-count',
  templateUrl: './children-count.component.html',
  styleUrls: ['./children-count.component.css']
})
export class ChildrenCountComponent implements OnInit, OnDestroy{

  @Input() childrenCount : FormControl;

  constructor(private tsumService: TsumService) {

  }

  ngOnInit(): void {
    this.childrenCount.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(data => this.tsumService.set('childrenCount', data));
  }

  ngOnDestroy(): void {
  }

  changeCount(num: number) {
    let value = this.childrenCount.value + num;
    if (value < 0) {
      this.childrenCount.setValue(0);
    } else {
      this.childrenCount.setValue(value);
    }
  }
}
