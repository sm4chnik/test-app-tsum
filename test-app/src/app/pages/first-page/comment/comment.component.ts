import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TsumService} from "../../../services/tsum.service";
import {untilDestroyed} from "ngx-take-until-destroy";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnDestroy {

  @Input() comment: FormControl;

  constructor(private tsumService: TsumService) {
  }

  ngOnInit(): void {
    this.comment.valueChanges.pipe(
    untilDestroyed(this)
  ).subscribe(data => this.tsumService.set('comment', data));
  }

  ngOnDestroy(): void {
  }
}
