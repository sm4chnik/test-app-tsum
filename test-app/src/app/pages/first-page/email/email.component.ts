import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {untilDestroyed} from "ngx-take-until-destroy";
import {TsumService} from "../../../services/tsum.service";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit, OnDestroy {

  @Input() email: FormControl;

  constructor(private tsumService: TsumService) {
  }

  ngOnInit(): void {
    this.email.valueChanges.pipe(
      filter(() => this.email.valid),
      untilDestroyed(this)
    ).subscribe(data => this.tsumService.set('email', data));
  }

  ngOnDestroy(): void {
  }

}
