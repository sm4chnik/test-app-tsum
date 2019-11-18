import { Component, OnInit } from '@angular/core';
import {TsumService} from "../../services/tsum.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidateFIO} from "../../validators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  form: FormGroup;

  constructor(
    public tsumService: TsumService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      fio: new FormControl('', [
        Validators.required,
        ValidateFIO
      ]),
      birthday: new FormControl(null, [
        Validators.required
      ]),
      gender: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      comment: new FormControl('', []),
      status: new FormControl(null, []),
      childrenCount: new FormControl(0, []),
    });
  }

  checkForm() {
    if (this.form.invalid) {
      return true;
    }
    if (!this.tsumService.isChild() && this.tsumService.get('status') === null){
      return true;
    }
    return false;
  }

  goNext() {
    this.router.navigate(['secondPage']);
  }
}
