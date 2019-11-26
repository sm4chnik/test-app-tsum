import { Component, OnInit } from '@angular/core';
import {IData, TsumService} from "../../services/tsum.service";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  data: IData;

  constructor(public tsumService: TsumService) { }

  ngOnInit() {
    this.data = this.tsumService.getAll()
  }

}
