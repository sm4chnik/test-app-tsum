import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {TsumService} from "../../../services/tsum.service";
import {filter} from "rxjs/operators";
import {untilDestroyed} from "ngx-take-until-destroy";

@Component({
  selector: 'app-fio',
  templateUrl: './fio.component.html',
  styleUrls: ['./fio.component.css']
})
export class FioComponent implements OnInit, OnDestroy {

  @Input() fioFormControl: FormControl;

  constructor(private tsumService: TsumService) {
  }

  ngOnInit(): void {
    this.fioFormControl.valueChanges.pipe(
      filter(() => this.fioFormControl.valid),
      untilDestroyed(this)
    ).subscribe(data => this.tsumService.set('fio', data));
  }

  ngOnDestroy(): void {
  }

}
